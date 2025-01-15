const { authJwt } = require("../middleware");
const controller = require("../controllers/courier.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  // Courier
  app.post("/api/courier-invoice", [authJwt.verifyToken], controller.createCourierInvoice);
  app.post("/api/customs-and-duty-invoice", [authJwt.verifyToken], controller.createCustomsAndDutyInvoice);
  app.get("/api/list-courier-invoice/:courier_code", [authJwt.verifyToken], controller.listCourierInvoice);
  app.get(
    "/api/list-customs-and-duty-invoice/:courier_code",
    [authJwt.verifyToken],
    controller.listCustomsAndDutyInvoice
  );
  app.get("/api/list-cod-manifest/:courier_code", [authJwt.verifyToken], controller.listCodManifest);
  app.post("/api/cod-manifest", [authJwt.verifyToken], controller.createCodManifest);
};
