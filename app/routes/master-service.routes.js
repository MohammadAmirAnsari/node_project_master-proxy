const { authJwt } = require("../middleware");
const controller = require("../controllers/master-service.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/master-service",
    [authJwt.verifyToken],
    controller.getMasterServices
  );
  app.get(
    "/api/master-service-group",
    [authJwt.verifyToken],
    controller.getMasterServicesGroup
  );
  app.get(
    "/api/service-type-master/dropdown",
    [authJwt.verifyToken],
    controller.getServiceTypesDropDown
  );
  app.post(
    "/api/service-group-master",
    [authJwt.verifyToken],
    controller.createServiceGroup
  );
  app.get(
    "/api/service-type-master",
    [authJwt.verifyToken],
    controller.getServiceTypeMaster
  );
  app.post(
    "/api/service-type-master",
    [authJwt.verifyToken],
    controller.createServiceType
  );
  app.get(
    "/api/service-group-master/dropdown",
    [authJwt.verifyToken],
    controller.getServiceGroupDropDown
  );
  app.post(
    "/api/rate-service",
    [authJwt.verifyToken],
    controller.createRateService
  );
  app.get(
    "/api/rate-service",
    [authJwt.verifyToken],
    controller.getServiceRate
  );
  app.patch(
    "/api/rate-service",
    [authJwt.verifyToken],
    controller.editRateService
  );
};