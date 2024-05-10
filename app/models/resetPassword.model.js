module.exports = (sequelize, Sequelize) => {
  const ResetPassword = sequelize.define("resetpassword", {
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    token: {
      type: Sequelize.STRING,
      unique: true,
    },
    expire: {
      type: Sequelize.DATE,
    },
    used: {
      type: Sequelize.BOOLEAN,
    },
  });
  return ResetPassword;
};
