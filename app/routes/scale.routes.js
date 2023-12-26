const controller = require("../controllers/scale.controller");
module.exports = function (app) {
    app.get(
        "/api/scale",
        controller.pushSaleDataToMw
    );
}