require('dotenv').config()
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.PRINTING_AUTH

exports.generrateCommercialInvoice = (req, res) => {
    console.log("req.body : ", req.body)
    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/com-invoice/", req.body)
        .then(invRes => {
            console.log("invRes.data : ", invRes.data)
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.generateBulkAwb = (req, res) => {
    console.log("req.body : ", req.body)
    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/wms-generate-ultimate/", req.body)
        .then(invRes => {
            console.log("invRes.data : ", invRes.data)
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};