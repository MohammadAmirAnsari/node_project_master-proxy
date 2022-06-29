const { authJwt } = require("../middleware");
const controller = require("../controllers/inventory.controller");
module.exports = function (app) {
    app.post(
        "/api/handling-report",
        [authJwt.verifyToken],
        controller.getHandlingReport
    );
    app.post(
        "/api/handling-report-excel-sheet",
        [authJwt.verifyToken],
        controller.getHandlingReportExcelSheet
    );
    app.post(
        "/api/prepare-erp-data",
        [authJwt.verifyToken],
        controller.prepareErpData
    );
}