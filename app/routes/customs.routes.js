const { authJwt } = require("../middleware");
const controller = require("../controllers/customs.controller");
module.exports = function (app) {
  app.get("/api/customs/house-manifest", [authJwt.verifyToken], controller.getHouseManifest);
  app.get("/api/customs/client-manifest", [authJwt.verifyToken], controller.getClientManifest);
  app.get("/api/customs/air-manifest", [authJwt.verifyToken], controller.getAirManifest);
  app.post("/api/customs/house-manifest", [authJwt.verifyToken], controller.addHouseManifest);
  app.delete("/api/customs/house-manifest/:id", [authJwt.verifyToken], controller.deleteHouseManifest);
  app.post("/api/customs/air-manifest", [authJwt.verifyToken], controller.addAirManifest);
};
