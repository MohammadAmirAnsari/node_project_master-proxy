const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const axios = require('axios');

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  const bearer = token.split(' ');
  const bearerToken = bearer[1];
  jwt.verify(bearerToken, config.secret, (err, decoded) => {
    if (err) {
      return catchError(err, res);
    }
    console.log("decoded : ", decoded);
    req.userId = decoded.id;
    axios.defaults.headers.common['x-user-name'] = decoded.full_name || "NA";
    axios.defaults.headers.common['x-user-id'] = decoded.id || "NA";
    axios.defaults.headers.common['x-hub-id'] = decoded.destinationDepot || "NA";
    axios.defaults.headers.common['x-merchant-id'] = decoded.merchantCode || "NA";
    if (req.originalUrl.includes("/api/permissions") || req.originalUrl.includes("/api/rate-service")) {
      User.findOne({
        where: {
          id: req.userId
        }
      })
        .then(async (user) => {
          user.getRoles().then(roles => {
            req.roleId = roles[0].id;
            req.roleName = roles[0].name;
            next();
          });
        });
    } else {
      next();
    }


  });
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

const isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};

const isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;
