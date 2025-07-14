const { authJwt } = require("../middleware");
const controller = require("../controllers/driver.controller");

module.exports = function (app) {
  app.get("/api/drivers", [authJwt.verifyToken], controller.fetchAllDrivers);
  app.get("/api/banks", [authJwt.verifyToken], controller.fetchAllBanks);
  app.post("/api/driver", [authJwt.verifyToken], controller.createDriver);
  app.get("/api/fetchdriver/:id", [authJwt.verifyToken], controller.fetchDriver);
  app.get("/api/reports/sendfinance/:id", [authJwt.verifyToken], controller.sendFinance);
  app.get("/api/reports/sendfinish/:id", [authJwt.verifyToken], controller.sendFinish);

  app.get("/api/reports/muscatbank/:id", [authJwt.verifyToken], controller.muscatBank);
  app.get("/api/reports/otherbanks/:id", [authJwt.verifyToken], controller.otherBanks);
  app.get("/api/reports/finishreportedit/:id", [authJwt.verifyToken], controller.finishreportedit);
  app.post("/api/reports/:id", [authJwt.verifyToken], controller.updatePayment);
  app.delete("/api/reports/:id", [authJwt.verifyToken], controller.deletePayment);
  app.get("/api/reports", [authJwt.verifyToken], controller.fetchAllReports);
  app.post("/api/reports", [authJwt.verifyToken], controller.createPayment);


  app.get("/api/fetchreport/:id", [authJwt.verifyToken], controller.fetchReport);

};
