module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING
    },
    full_name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue : false  
    },
    
  });

  return User;
};
