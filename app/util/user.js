const Joi = require("joi");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const db = require("../models");

const {
  user: User,
  role: Role,
  refreshToken: RefreshToken,
  passwordsHashs,
  resetPassword: ResetPassword,
  forbiddenWords: ForbiddenWords,
} = db;
const { Op } = require("sequelize");
const helperController = require("../controllers/helper.controller");

const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

async function createVendorUser(data) {
  console.log("data", data);
  const schema = Joi.object({
    email: Joi.string().min(3).max(256).required(),
    username: Joi.string().min(3).max(256).required(),
    password: Joi.string().min(3).max(32).required().pattern(pattern),
    full_name: Joi.string().min(3).max(256).required(),
    roles: Joi.array().items(Joi.string()),
    VendorCode: Joi.string().min(3).max(256).required(),
  });

  const value = await schema.validateAsync(data, { abortEarly: false });

  const salt = crypto.randomBytes(16).toString("base64");
  const passwordHash = crypto.pbkdf2Sync(data.password, salt, 10000, 256 / 8, "sha512").toString("base64");
  console.log("data", data);
  const user = await User.create({
    username: data.username,
    email: data.email,
    full_name: data.full_name,
    VendorCode: data.VendorCode,
    status: true,
    password: passwordHash,
    Salt: salt,
    password_last_changed: new Date(),
  });

  // create master user
  helperController.createMasterUsersMw({
    master_id: user.id,
    NameEn: user.full_name,
  });

  // assign roles
  if (data.roles && data.roles.length > 0) {
    const roles = await Role.findAll({
      where: {
        name: {
          [Op.or]: data.roles,
        },
      },
    });
    await user.setRoles(roles);
  } else {
    await user.setRoles([1]); // default role
  }

  // store password hash
  await passwordsHashs.create({
    user_id: user.id,
    password: bcrypt.hashSync(data.password, 8),
  });

  return user;
}

module.exports = {
  createVendorUser,
};
