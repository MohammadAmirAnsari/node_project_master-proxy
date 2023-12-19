module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    password_last_changed: {
      type: Sequelize.DATE,
    },
    lock_up_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    last_lock_up_date: {
      type: Sequelize.DATE,
    },
  });

  return User;
};
