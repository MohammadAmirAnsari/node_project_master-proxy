module.exports = (sequelize, Sequelize) => {
    const Permissions = sequelize.define("permissions", {
        title: {
            type: Sequelize.STRING
        },
    });

    return Permissions;
};