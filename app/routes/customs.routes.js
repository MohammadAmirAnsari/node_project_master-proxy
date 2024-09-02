const { authJwt } = require("../middleware");
const controller = require("../controllers/customs.controller");
module.exports = function (app) {
  app.get("/api/customs/house-manifest", [authJwt.verifyToken], controller.getHouseManifest);
  app.get("/api/customs/client-manifest", [authJwt.verifyToken], controller.getClientManifest);
  app.get("/api/customs/air-manifest", [authJwt.verifyToken], controller.getAirManifest);
  app.get("/api/customs/declaration", [authJwt.verifyToken], controller.getDeclaration);
  app.delete("/api/customs/air-manifest/:id", [authJwt.verifyToken], controller.deleteAirManifest);
  app.delete("/api/customs/house-manifest/:id", [authJwt.verifyToken], controller.deleteHouseManifest);
  app.delete("/api/customs/declaration/:id", [authJwt.verifyToken], controller.deleteDeclaration);
  app.post("/api/customs/house-manifest", [authJwt.verifyToken], controller.addHouseManifest);
  app.post("/api/customs/air-manifest", [authJwt.verifyToken], controller.addAirManifest);
  app.post("/api/customs/declaration", [authJwt.verifyToken], controller.addDeclaration);
  app.post("/api/customs/house-manifest/repush", [authJwt.verifyToken], controller.repushHouseManifest);
  app.post("/api/customs/house-manifest/repush-air", [authJwt.verifyToken], controller.repushAirManifest);
};
