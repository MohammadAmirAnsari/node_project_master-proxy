module.exports = (sequelize, Sequelize) => {
    const PermissionRole = sequelize.define("permission_role", {
        role_id: {
            type: Sequelize.INTEGER,
        },
        permission_id: {
            type: Sequelize.INTEGER,
        },
    });

    return PermissionRole;
};