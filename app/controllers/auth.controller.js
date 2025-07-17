require("dotenv").config();
const db = require("../models");
const config = require("../config/auth.config");

const crypto = require('crypto')

const { user: User, role: Role, refreshToken: RefreshToken, passwordsHashs, resetPassword: ResetPassword , forbiddenWords: ForbiddenWords } = db;

const permissionsController = require("../controllers/permissions.controller");
const helperController = require("../controllers/helper.controller");
const Op = db.Sequelize.Op;
var pbkdf2 = require('pbkdf2')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
exports.signup = async (req, res) => {
  try {
   
    const schema = Joi.object({ 
      email: Joi.string()
        .min(3)
        .max(256)
        .required(),
      password: Joi.string()
        .min(3)
        .max(32)
        .required().pattern(pattern),
      full_name: Joi.string()
        .min(3)
        .max(256)
        .required(),
      roles: Joi.array().items(Joi.string()),
      merchantCode: Joi.string().optional()
        .min(6)
        .max(50).allow(null),
      destinationDepot: Joi.string().optional()
        .min(3)
        .max(150).allow(null),
    });
    const value = await schema.validateAsync(req.body, { abortEarly: false });
    let salt = crypto.randomBytes(16).toString('base64');
    let password = crypto.pbkdf2Sync(req.body.password, salt, 10000, (256 / 8), 'sha512').toString('base64');
    
    // Save User to Database
    User.create({
      username: req.body.username,
      email: req.body.email,
      full_name: req.body.full_name,
      MerchantCode: req.body?.merchantCode || null,
      DestinationDepot: req.body?.destinationDepot || null,
      status: true,
      password: password,
      Salt: salt, 
      password_last_changed: new Date(),
    })
      .then((user) => {
        
        helperController.createMasterUsersMw({
          master_id: user.id,
          NameEn: user.full_name
        });
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles,
              },
            },
          }).then((roles) => {
            user.setRoles(roles).then(() => {
              res.status(200).json({ status: true, message: "User registered successfully!" });
            });
          });
        } else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        }
        console.log("user : ", user);
        // add password to passwordsHashs
        passwordsHashs.create({
          user_id: user.id,
          password: bcrypt.hash(req.body.password, 8)
        });
      })
      .catch((err) => {
        console.log("err : ", err);
        res.status(500).json({ status: false, message: err.message });
      });
  } catch (e) {
    console.log("e : ", e);
    res.status(400).json({
      status: false,
      message: "Client Not Created",
      errors: e.details,
    });
  }
  console.log("data", "*".repeat(100));
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      if (user.status == 0) {
        return res.status(400).send({ message: "User Is Not Active , Please Contact Adminstration." });
      }
      var derivedKey = pbkdf2.pbkdf2Sync(req.body.password, user.Salt, 10000, (256 / 8), 'sha512')
      var base64Password = Buffer.from(derivedKey).toString('base64');


      if (base64Password != user.password) {
        user.lock_up_count = user.lock_up_count + 1;
        await user.save();
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      // check password last changed
      if (user.password_last_changed) {
        let password_last_changed = new Date(user.password_last_changed);
        let now = new Date();
        let diff = now - password_last_changed;
        let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        if (diffDays > 45) {
          return res.status(401).send({
            accessToken: null,
            message: "Your Password Is Expired , You will be redirected to reset it.",
          });
        }
      }
      if (user.lock_up_count >= 3) {
        if (!user.last_lock_up_date) {
          // set lock up date to now
          user.last_lock_up_date = new Date();
          await user.save();
          return res.status(401).send({
            accessToken: null,
            message: "Your Account Is Locked , You will be redirected to reset it.",
          });
        } else {
          // check if the last lock up date is 30 min ago
          let last_lock_up_date = new Date(user.last_lock_up_date);
          let now = new Date();
          let diff = now - last_lock_up_date;
          let diffMin = Math.ceil(diff / (1000 * 60));
          if (diffMin > 30) {
            // reset lock up count
            user.lock_up_count = 0;
            // reset last lock up date
            user.last_lock_up_date = null;
            await user.save();
          } else {
            return res.status(401).send({
              accessToken: null,
              message: "Your Account Is Locked , You will be redirected to reset it.",
            });
          }
        }
      }


      let refreshToken = await RefreshToken.createToken(user);

      let authorities = [];
      user.getRoles().then(async (roles) => {
        var all_roles = [];
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
          all_roles.push(roles[i].name.toUpperCase());
        }
        // permissionsController.getInternalPermissions(roles[0].id).then(perm => {
        //   console.log("perm : ",perm);
        // });
        let permm = await permissionsController.getInternalPermissions(roles[0].id);

       
        const token = jwt.sign({
          id: user.id, 
          email: user.email,
          status: user.status,
          full_name: user.full_name,
          roles: all_roles,
          destinationDepot: user.DestinationDepot,
          merchantCode: user.MerchantCode,
          erpCode: user.ErpCode
         }, config.secret, {
         expiresIn: config.jwtExpiration
       });
        user.last_login_date = new Date();
        await user.save();
        res.status(200).send({
          id: user.id,
          username: user.username,
          full_name: user.full_name,
          email: user.email,
          roles: authorities,
          accessToken: token,
          refreshToken: refreshToken,
          destinationDepot: user.DestinationDepot,
          merchantCode: user.MerchantCode,
          permissions: permm,
          expiresIn: config.jwtExpiration,
          vendorCode: user.VendorCode,
          erpCode: user.ErpCode,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ status: false, message: err.message });
    });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });



    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { id: refreshToken.id } });

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    const user = await refreshToken.getUser();
    user.last_used_refresh_token = new Date();
    await user.save();
    let authorities = [];
    user.getRoles().then(async (roles) => {
      var all_roles = [];
      for (let i = 0; i < roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
        all_roles.push(roles[i].name.toUpperCase());
      }
      let newAccessToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          status: user.status,
          full_name: user.full_name,
          roles: all_roles,
          destinationDepot: user.DestinationDepot,
          merchantCode: user.MerchantCode,
        },
        config.secret,
        {
          expiresIn: config.jwtExpiration,
        }
      );

      return res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: refreshToken.token,
      });
     });
    
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
exports.resetPassword = async (req, res) => {
  try {
    const MW_AUTH = process.env.MW_AUTH;
    if (!MW_AUTH) {
      throw new Error("MW_AUTH environment variable is not set.");
    }
    const encrypted = crypto.randomBytes(24).toString("hex");
    // delete reset password exists for this email if it's expired or used
    isNotBefore24Hours = await ResetPassword.findOne({
      where: {
        email: req.body.email,
        used: true,
        expire: {
          [Op.gt]: new Date(),
        },
      },
    });
    if (isNotBefore24Hours) {
      return res.status(400).send({ message: "Reset Password is not allowed before 24 hours" });
    }
    await ResetPassword.destroy({
      where: {
        email: req.body.email,
        [Op.or]: [
          {
            expire: {
              [Op.lt]: new Date(),
            },
          },
          {
            used: true,
          },
        ],
      },
    });
    isExist = await ResetPassword.findOne({
      where: {
        email: req.body.email,
        used: false,
        expire: {
          [Op.gt]: new Date(),
        },
      },
    });
    // user not found
    UserFound = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!UserFound) {
      return res.status(400).send({ message: "User Not Found" });
    }

    console.log("isExist", isExist);
    // not before 24 hours reset password even if it's used
    isNotBefore24Hours = await ResetPassword.findOne({
      where: {
        email: req.body.email,
        used: true,
        expire: {
          [Op.gt]: new Date(),
        },
      },
    });
    if (isNotBefore24Hours) {
      return res.status(400).send({ message: "Reset Password is not allowed before 24 hours" });
    }

    if (isExist) {
      return res.status(400).send({ message: "Reset Password Already Exists" });
    }

    await ResetPassword.create({
      email: req.body.email,
      token: encrypted,
      expire: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      used: false,
    });
    const resetPasswordLink = `${process.env.MASTER_URL}/reset-password-form/?token=${encrypted}`;
    helperController.sendResetPasswordLinkMw({
      body: {
        email: req.body.email,
        resetPasswordLink,
      },
    }).then((response) => {
      if (response.status !== 200) {
        return res.status(500).send({ message: "Internal server error" });
      }
      return res.status(200).send({ message: "Reset Password" });
    });
  
  } catch (error) {
    return res.status(500).send({ error: "Internal server error" });
  }
};
exports.applyResetPassword = async (req, res) => {
  try {
    const schema = Joi.object({
      token: Joi.string().required(),
      password: Joi.string().min(3).max(32).required().pattern(pattern),
    });
    const value = await schema.validateAsync(req.body, { abortEarly: false });
    const resetPassword = await ResetPassword.findOne({
      where: {
        token: req.body.token,
        used: false,
        expire: {
          [Op.gt]: new Date(),
        },
      },
    });
    if (!resetPassword) {
      return res.status(400).send({ message: "Invalid Token" });
    }
    // if that password exists in passwordsHashs table last 5 passwords sorted by created_at desc , then return error
    
    const user = await User.findOne({
      where: {
        email: resetPassword.email,
      },
    });
    if (!user) {
      return res.status(400).send({ message: "User Not Found" });
    }
    const passwords = await passwordsHashs.findAll({
      where: {
        user_id: user.id,
      },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
  
    for (let i = 0; i < passwords.length; i++) {
      console.log(passwords[i].password);
      if (bcrypt.compareSync(req.body.password, passwords[i].password)) {
    
        return res.status(400).send({ message: "Password must be different from last 5 passwords" });
      }
    }
    // check if the password in forbidden words
    const forbiddenWords = await ForbiddenWords.findAll();
    for (let i = 0; i < forbiddenWords.length; i++) {
      if (req.body.password.includes(forbiddenWords[i].word)) {
        return res.status(400).send({ message: "Password contains forbidden word" });
      }
    }
    let salt = crypto.randomBytes(16).toString("base64");
    let password = crypto.pbkdf2Sync(req.body.password, salt, 10000, 256 / 8, "sha512").toString("base64");
    user.password = password;
    user.lock_up_count = 0;
    user.Salt = salt;
    user.password_last_changed = new Date();
    // add password to passwordsHashs
    passwordsHashs.create({
      user_id: user.id,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    try {
      await user.save();
    } catch (error) {
      return res.status(400).send({ message: "Error occurred while updating password , please make sure that the password is applied to policy" });
    }
    resetPassword.used = true;
    await resetPassword.save();
    return res.status(200).send({ message: "Password Reset Successfully" });
  } catch (error) {
    if (error.details) {
      if (error.details[0].message.includes("pattern")) {
        return res.status(400).send({ message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character" });
      }
    }
  }
};
exports.verifyPasswordPolicy = async (req, res) => {
  try {
    const schema = Joi.object({
      password: Joi.string().min(3).max(32).required().pattern(pattern),
    });
    const value = await schema.validateAsync(req.body, { abortEarly: false });
    // check if the password in forbidden words
    const forbiddenWords = await ForbiddenWords.findAll();
    for (let i = 0; i < forbiddenWords.length; i++) {
      if (req.body.password.includes(forbiddenWords[i].word)) {
        return res.status(400).send({ message: "Password contains forbidden word" });
      }
    }
    

    return res.status(200).send({ message: "Password is applied to the policy" });
  } catch (error) {
    if (error.details) {
      if (error.details[0].message.includes("pattern")) {
        return res.status(400).send({ message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character" });
      }
    }
  }
}
