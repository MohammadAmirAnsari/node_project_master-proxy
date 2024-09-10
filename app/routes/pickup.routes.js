const { authJwt } = require("../middleware");
const controller = require("../controllers/pickup.controller");

module.exports = function (app) {

  app.get("/api/pickup/fetchAll", [authJwt.verifyToken], controller.fetchAllPickup);
  app.get("/api/pickup/fetchByCountryMerchant", [authJwt.verifyToken], controller.fetchPickupByCountryMerchant);
  app.get("/api/pickup/fetchMerchants", [authJwt.verifyToken], controller.fetchMerchants);
  app.post("/api/pickup/createOrders", [authJwt.verifyToken], controller.createOrders);
  app.put("/api/pickup/updateOrders/:id", [authJwt.verifyToken], controller.updateOrders);
  app.get("/api/pickup/listOrders", [authJwt.verifyToken], controller.listOrders);
  app.get("/api/pickup/listAddresses", [authJwt.verifyToken], controller.listAddresses);
  app.post("/api/pickup/bulkUpdateOrders", controller.bulkUpdateOrders);
};
