const { authJwt } = require("../middleware");
const controller = require("../controllers/pddp.controller");

module.exports = function (app) {
  app.post("/api/generateReport", [authJwt.verifyToken], controller.generateReport);
};
