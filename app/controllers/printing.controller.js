require('dotenv').config()
const axios = require('axios');
const config = {
    headers: {
        Authorization: process.env.PRINTING_AUTH,
    }
};
exports.generrateCommercialInvoice = (req, res) => {
    
    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/com-invoice/", req.body, config)
        .then(invRes => {
            
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.generrateCommercialInvoiceExcel = (req, res) => {

    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/com-invoice-excel/", req.body, config)
        .then(invRes => {

            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.generateBulkAwb = (req, res) => {

    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/wms-generate-ultimate/", req.body, config)
        .then(invRes => {
  
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.generateSingleAwb = (req, res) => {
    isIrto = req.body.isIrto;
    let url = process.env.PRINTING_URL + "/api/v1/printing/print-wms-awb/";
    if (isIrto) {
        url = process.env.PRINTING_URL + "/api/v1/printing/generate-irto/";
    }
    axios
        .post(url, req.body, config)
        .then(invRes => {
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data)
        });
};
exports.generateManifest = (req, res) => {
    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/generate-irto-manifest/", req.body, config)
        .then(invRes => {
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            console.log("error : ", error)
            res.status(error.response.status).json(error.response.data)
        });
};
exports.generateIpickupManifest = (req, res) => {
    axios
        .post(process.env.PRINTING_URL + "/api/v1/printing/generate-ipickup-manifest/", req.body, config)
        .then(invRes => {
            res.status(invRes.status).json(invRes.data)
        })
        .catch(error => {
            console.log("error : ", error)
            res.status(error.response.status).json(error.response.data)
        });
};
