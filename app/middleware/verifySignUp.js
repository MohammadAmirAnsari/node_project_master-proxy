const db = require("../models");
const ROLES = db.ROLES;
const RolesDb = db.role;
const User = db.user;
const passwordHashs = db.passwordsHashs;
const forbiddenWords = db.forbiddenWords;
const bcrypt = require("bcryptjs");
checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    }
    next();
  });
  // Username
  // User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // }).then(user => {
  //   if (user) {
  //     res.status(400).send({
  //       message: "Failed! Username is already in use!"
  //     });
  //     return;
  //   }

  //   // Email
  //   User.findOne({
  //     where: {
  //       email: req.body.email
  //     }
  //   }).then(user => {
  //     if (user) {
  //       res.status(400).send({
  //         message: "Failed! Email is already in use!"
  //       });
  //       return;
  //     }
  //     User.findOne({
  //       where: {
  //         merchant_code: req.body.merchant_code
  //       }
  //     }).then(user => {
  //       if (user) {
  //         res.status(400).send({
  //           message: "Failed! Merchant Code is already in use!"
  //         });
  //         return;
  //       }

  //       next();
  //     });
  //   });
  // });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    RolesDb.findAll({
      attributes: ["name"],
    }).then((roles) => {
      let roles_list = [];
      for (const i in roles) {
        roles_list.push(roles[i].name);
      }
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!roles_list.includes(req.body.roles[i])) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.roles[i],
          });
          return;
        }
      }
      next();
    });
  } else {
    next();
  }
};
// check if the password contains forbidden words
const checkForbiddenWords = (req, res, next) => {
  // check if the password on the password hash table with the user id
  forbiddenWords
    .findAll({
      attributes: ["word"],
    })
    .then((words) => {
      let words_list = [];
      for (const i in words) {
        words_list.push(words[i].word);
      }
      for (let i = 0; i < words_list.length; i++) {
        if (req.body.password.includes(words_list[i])) {
          res.status(400).send({
            message: "Password contains forbidden words!",
          });
          return;
        }
      }
      next();
    });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
  checkForbiddenWords: checkForbiddenWords,
};

module.exports = verifySignUp;
