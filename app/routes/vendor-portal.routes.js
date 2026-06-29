const { authJwt } = require("../middleware");
const controller = require("../controllers/vendor-portal.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/vendor-service-codes/all",
    [authJwt.verifyToken],
    controller.GetAllVendorServiceCodes
  );

  app.post(
    "/api/vendor-delivery-invoice/upload",
    [authJwt.verifyToken],
    controller.UploadDeliveryInvoice
  );
  app.post(
    "/api/vendor-custom-invoice/upload",
    [authJwt.verifyToken],
    controller.UploadCustomAndDeliveryInvoice
  )

  app.get(
    "/api/vendor-delivery-invoice/all",
    [authJwt.verifyToken],
    controller.GetAllDeliveryInvoice
  );

  app.get(
    "/api/vendor-delivery-invoice/all-for-credit-note",
    [authJwt.verifyToken],
    controller.GetAllDeliveryInvoiceForCreditNote
  );

  app.get(
    "/api/vendor-custom-invoice/all",
    [authJwt.verifyToken],
    controller.GetAllCustomAndDeliveryInvoice
  );

  app.get(
    "/api/vendor-custom-invoice/all-for-credit-note",
    [authJwt.verifyToken],
    controller.GetAllCustomInvoiceForCreditNote
  );

  app.get(
    "/api/vendor-delivery-invoice/history",
    [authJwt.verifyToken],
    controller.GetDeliveryInvoiceHistory
  );

  app.get(
    "/api/vendor-custom-invoice/history",
    [authJwt.verifyToken],
    controller.GetCustomInvoiceHistory
  );

  app.post(
    "/api/vendor-delivery-invoice/update-status",
    [authJwt.verifyToken],
    controller.UpdateDeliveryInvoiceStatus
  );

  app.post(
    "/api/vendor-custom-invoice/update-status",
    [authJwt.verifyToken],
    controller.UpdateCustomInvoiceStatus
  );

  app.post(
    "/api/vendor-credit-note/upload",
    [authJwt.verifyToken],
    controller.UploadCreditNote
  );

  app.post(
    "/api/vendor-reconcile-handler/add-comment",
    [authJwt.verifyToken],
    controller.AddReconciliationComment
  );

  app.get(
    "/api/vendor-reconcile-handler/get-exception-history",
    [authJwt.verifyToken],
    controller.GetExceptionHistory
  );

  app.get(
    "/api/vendor-reconcile-handler/get-mismatch-comments",
    [authJwt.verifyToken],
    controller.GetMismatchComments
  )

  app.get(
    "/api/vendor-credit-note/all",
    [authJwt.verifyToken],
    controller.GetAllCreditNotes
  );

  app.get(
    "/api/vendor-credit-note/history",
    [authJwt.verifyToken],
    controller.GetCreditNoteHistory
  );

  app.post(
    "/api/vendor-credit-note/update-status",
    [authJwt.verifyToken],
    controller.UpdateCreditNoteStatus
  );

  app.post(
    "/api/vendor-cod-statement/upload",
    [authJwt.verifyToken],
    controller.UploadCodStatement
  );

  app.get(
    "/api/vendor-cod-statement/all",
    [authJwt.verifyToken],
    controller.GetAllCodStatements
  );

  app.get(
    "/api/vendor-cod-statement/history",
    [authJwt.verifyToken],
    controller.GetCodStatementHistory
  );

  app.post(
    "/api/vendor-cod-statement/update-status",
    [authJwt.verifyToken],
    controller.UpdateCodStatementStatus
  );

  app.get(
    "/api/vendor-custom-invoice/approved-custom-invoice-for-cod",
    [authJwt.verifyToken],
    controller.GetApprovedCustomInvoiceForCod
  );

  app.get(
    "/api/vendor/list-vendors",
    [authJwt.verifyToken],
    controller.ListVendors
  );
  app.post(
    "/api/vendor/create-vendor",
    [authJwt.verifyToken],
    controller.CreateVendor
  );
  app.get(
    "/api/vendor/get-vendor-by-id/:id",
    [authJwt.verifyToken],
    controller.GetVendorById
  );
  app.get(
    "/api/vendor/get-vendor-by-code/:code",
    [authJwt.verifyToken],
    controller.GetVendorByCode
  );
  app.post(
    "/api/vendor/create-vendor-contract",
    [authJwt.verifyToken],
    controller.CreateVendorContract
  );
  app.post("/api/vendor/create-vendor-contract-line",[authJwt.verifyToken], controller.CreateVendorContractLine);
  app.get(
    "/api/vendor/get-vendor-contract-lines/:id",
    [authJwt.verifyToken],
    controller.GetVendorContractLines
  );
  app.get(
    "/api/vendor/get-vendor-contracts/:id",
    [authJwt.verifyToken],
    controller.GetVendorContracts
  );
  app.patch(
    "/api/vendor/update-vendor-contract/:id",
    [authJwt.verifyToken],
    controller.UpdateVendorContract
  );
  app.patch(
    "/api/vendor/update-contract-line/:id",
    [authJwt.verifyToken],
    controller.UpdateVendorContractLine
  );
  app.patch(
    "/api/vendor/update-vendor-executives/:id",
    [authJwt.verifyToken],
    controller.UpdateVendorExecutives
  );
  app.post(
    "/api/vendor/notify-invoice-remark",
    [authJwt.verifyToken],
    controller.NotifyInvoiceRemark
  );
  app.post("/api/vendor/add-vendor-user",[authJwt.verifyToken], controller.AddVendorUser);
};
