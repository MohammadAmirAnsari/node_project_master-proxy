const { authJwt } = require("../middleware");
const controller = require("../controllers/oman-master.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  // Oman Governorates
  app.get("/api/oman-governorates-master", [authJwt.verifyToken], controller.getOmanGovernoratesMaster);
  app.get("/api/oman-governorate", [authJwt.verifyToken], controller.getOmanGovernorate);
  app.post("/api/create-oman-governorate", [authJwt.verifyToken], controller.createOmanGovernorate);
  app.post("/api/edit-oman-governorate", [authJwt.verifyToken], controller.editOmanGovernorate);

  // Oman Wilayats
  app.get("/api/oman-wilayat-master", [authJwt.verifyToken], controller.getOmanWilayatsMaster);
  app.get("/api/oman-wilayat", [authJwt.verifyToken], controller.getOmanWilayat);
  app.post("/api/create-oman-wilayat", [authJwt.verifyToken], controller.createOmanWilayat);
  app.post("/api/edit-oman-wilayat", [authJwt.verifyToken], controller.editOmanWilayat);
  // Oman Cities
  app.get("/api/oman-cities-master", [authJwt.verifyToken], controller.getOmanCitiesMaster);
  app.get("/api/oman-city", [authJwt.verifyToken], controller.getOmanCity);
  app.post("/api/create-oman-city", [authJwt.verifyToken], controller.createOmanCity);
  app.post("/api/edit-oman-city", [authJwt.verifyToken], controller.editOmanCity);
  // Oman Areas
  app.get("/api/oman-areas-master", [authJwt.verifyToken], controller.getOmanAreasMaster);
  app.get("/api/oman-area", [authJwt.verifyToken], controller.getOmanArea);
  app.post("/api/create-oman-area", [authJwt.verifyToken], controller.createOmanArea);
  app.post("/api/edit-oman-area", [authJwt.verifyToken], controller.editOmanArea);
};
