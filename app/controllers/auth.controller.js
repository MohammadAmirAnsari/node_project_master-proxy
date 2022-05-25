const db = require("../models");
const config = require("../config/auth.config");
const { user: User, role: Role, refreshToken: RefreshToken } = db;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require('joi');
const pattern = /^(?!.*\/\/)([\w-]*[a-zA-Z0-9_-])?$/;
exports.signup = async (req, res) => {

  try {
    const schema = Joi.object({
      // merchant_code: Joi.string()
      //   .pattern(new RegExp(pattern))
      //   .min(3)
      //   .max(32)
      //   .required(),
      // tracking_prefix: Joi.string()
      //   .pattern(new RegExp(pattern))
      //   .min(3)
      //   .max(32),
      // use_order_ref: Joi.boolean().falsy('N'),
      // username: Joi.string()
      //   .min(3)
      //   .max(32)
      //   .required(),
      email: Joi.string()
        .min(3)
        .max(32)
        .required(),
      password: Joi.string()
        .min(3)
        .max(32)
        .required(),
      full_name: Joi.string()
        .min(3)
        .max(128)
        .required(),
      roles : Joi.array().items(Joi.string())
    });
    const value = await schema.validateAsync(req.body, { abortEarly: false });
    // Save User to Database
    User.create({
      username: req.body.username,
      email: req.body.email,
      full_name: req.body.full_name,
      status: true,
      password: bcrypt.hashSync(req.body.password, 8)
    })
      .then(user => {
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          }).then(roles => {
            user.setRoles(roles).then(() => {
              res.send({ message: "User registered successfully!" });
            });
          });
        } else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  } catch (e) {
    console.log("e : ", e);
    res.status(400).json({
      status: false,
      message: "Client Not Created",
      errors: e.details,
    });
  }

};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      

      let refreshToken = await RefreshToken.createToken(user);

      let authorities = [];
      user.getRoles().then(roles => {
        var all_roles = [];
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
          all_roles.push(roles[i].name.toUpperCase());
        }
        const token = jwt.sign({
          id: user.id, 
          email: user.email,
          status: user.status,
          full_name: user.full_name,
          roles : all_roles
         }, config.secret, {
         expiresIn: config.jwtExpiration
       });
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
          refreshToken: refreshToken,
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

    console.log(refreshToken)

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
    let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};