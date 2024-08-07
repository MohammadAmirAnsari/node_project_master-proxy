const { authJwt } = require("../middleware");
const controller = require("../controllers/rto.controller");

module.exports = function (app) {
  app.get("/api/fetchAllRto", [authJwt.verifyToken], controller.fetchAllRto);
  app.get("/api/fetchRtoByCountryMerchant", [authJwt.verifyToken], controller.fetchRtoByCountryMerchant);
  app.get("/api/fetchMerchants", [authJwt.verifyToken], controller.fetchMerchants);
  app.post("/api/createOrders", [authJwt.verifyToken], controller.createOrders);
  app.put("/api/updateOrders/:id", [authJwt.verifyToken], controller.updateOrders);
  app.get("/api/listOrders", [authJwt.verifyToken], controller.listOrders);
  app.get("/api/listAddresses", [authJwt.verifyToken], controller.listAddresses);
};
