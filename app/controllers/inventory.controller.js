require('dotenv').config()
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.INVENTORY_AUTH;

exports.getHandlingReport = (req, res) => {
    let client_id = req.query.client_id || "";
    console.log("req.body : ", req.body)
    axios
        .post(process.env.INVENTORY_URL + "/v2/" + client_id + "/palletreport", req.body)
        .then(invRes => {
            console.log("invRes.data : ", invRes.data)
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.getHandlingReportExcelSheet = (req, res) => {
    let client_id = req.query.client_id || "";
    console.log("req.body : ", req.body)
    axios
        .post(process.env.INVENTORY_URL + "/v2/" + client_id + "/pallet-report-sheet", req.body)
        .then(invRes => {
            console.log("invRes.data : ", invRes.data)
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.prepareErpData = (req, res) => {
    let client_id = req.query.client_id || "";
    console.log("req.body : ", req.body)
    axios
        .post(process.env.INVENTORY_URL + "/v2/" + client_id + "/prepare-erp-data", req.body)
        .then(invRes => {
            console.log("invRes.data : ", invRes.data)
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};