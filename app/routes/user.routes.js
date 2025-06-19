const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/users/all",
    [authJwt.verifyToken],
    controller.getAllUsers
  );
  app.get(
    "/api/roles/all",
    [authJwt.verifyToken],
    controller.getAllRoles
  );
  app.post(
    "/api/users/active-deactive",
    [authJwt.verifyToken],
    controller.userActiveDeactive
  );
  app.post(
    "/api/users/change-role",
    [authJwt.verifyToken],
    controller.userChangeRole
  );
  app.get(
    "/api/users/:vendorCode",
    [authJwt.verifyToken],
    controller.getUsersByVendorCode
  )
};
