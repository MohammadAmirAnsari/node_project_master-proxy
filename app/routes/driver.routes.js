const { authJwt } = require("../middleware");
const controller = require("../controllers/driver.controller");

module.exports = function (app) {
  app.get("/api/drivers", [authJwt.verifyToken], controller.fetchAllDrivers);
  app.get("/api/fetchdriver/:id", [authJwt.verifyToken], controller.fetchDriver);

};
