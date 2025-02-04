const { authJwt } = require("../middleware");
const controller = require("../controllers/finance.controller");

module.exports = function (app) {
  app.get("/api/list-invoices", [authJwt.verifyToken], controller.listInvoices);
  app.get("/api/list-adjustments", [authJwt.verifyToken], controller.listAdjustments);
  app.get("/api/list-cod-manifests", [authJwt.verifyToken], controller.listCodManifests);
  app.post("/api/reconcile-invoice/:invoice_id", [authJwt.verifyToken], controller.reconcileInvoice);
  app.post("/api/mark-as-paid/:invoice_id", [authJwt.verifyToken], controller.markAsPaid);
};
