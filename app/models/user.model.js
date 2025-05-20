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
    Salt: {
      type: Sequelize.STRING
    },
    DestinationDepot: {
      type: Sequelize.STRING
    },
    MerchantCode: {
      type: Sequelize.STRING
    },
    VendorCode: {
      type: Sequelize.STRING
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
    last_login_date: {
      type: Sequelize.DATE,
      defaultValue:null
    },
    last_used_refresh_token: {
      type: Sequelize.DATE,
      defaultValue: null
    },
  });

  return User;
};
