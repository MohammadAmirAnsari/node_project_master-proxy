const { authJwt } = require("../middleware");
const controller = require("../controllers/pickup.controller");

module.exports = function (app) {
  app.get("/api/fetchAllPickup", [authJwt.verifyToken], controller.fetchAllPickup);
  app.get("/api/fetchPickupByCountryMerchant", [authJwt.verifyToken], controller.fetchPickupByCountryMerchant);
  app.get("/api/fetchMerchants", [authJwt.verifyToken], controller.fetchMerchants);
  app.post("/api/createOrders", [authJwt.verifyToken], controller.createOrders);
  app.put("/api/updateOrders/:id", [authJwt.verifyToken], controller.updateOrders);
  app.get("/api/listOrders", [authJwt.verifyToken], controller.listOrders);
  app.get("/api/listAddresses", [authJwt.verifyToken], controller.listAddresses);
  app.post("/api/bulkUpdateOrders", controller.bulkUpdateOrders);
};
