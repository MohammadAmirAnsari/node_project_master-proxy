const controller = require("../controllers/scale.controller");
module.exports = function (app) {
    app.post(
        "/api/scale-list",
        controller.scaleDataList
    );
}