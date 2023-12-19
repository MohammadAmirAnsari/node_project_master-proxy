module.exports = (sequelize, Sequelize) => {
  const PasswordsHashs = sequelize.define("passwords_hashs", {
    password: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
  });

  return PasswordsHashs;
};
//
