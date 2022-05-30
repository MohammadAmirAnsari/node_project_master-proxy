const { authJwt } = require("../middleware");
const controller = require("../controllers/permissions.controller");
const { commonFunctions } = require("../middleware");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/permissions",
        [authJwt.verifyToken],
        controller.getPermissions
    );
    app.get(
        "/api/permissions/all",
        [authJwt.verifyToken],
        controller.getAllPermissions
    );
    app.get(
        "/api/permissions/no-page",
        [authJwt.verifyToken],
        controller.getAllPermissionsWithoutPage
    );
    app.get(
        "/api/permissions/role",
        [authJwt.verifyToken],
        controller.getPermissionsByRoleId
    );
    app.post(
        "/api/permissions/role/update",
        [authJwt.verifyToken],
        controller.updatePermissionsRole
    );
    app.post(
        "/api/role",
        [
            authJwt.verifyToken,
            commonFunctions.checkDuplicateRole
        ],
        controller.addRole
    );
    app.post(
        "/api/permissions",
        [
            authJwt.verifyToken,
            commonFunctions.checkDuplicatePermissions
        ],
        controller.addPermissions
    );
    app.get(
        "/api/role/no-page",
        [authJwt.verifyToken],
        controller.getAllRolesWithoutPage
    );
}