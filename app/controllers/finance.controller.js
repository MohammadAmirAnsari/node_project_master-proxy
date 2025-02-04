require("dotenv").config();
const axios = require("axios");
const e = require("express");
exports.listInvoices = async (req, res) => {
  try {
    axios
      .get(process.env.MW_URL + "/v2/finance/list-invoices", {
        headers: {
          Authorization: process.env.MW_AUTH,
        },
      })
      .then((response) => {
        // success response
        res.status(200).json(response.data);
      })
      .catch((error) => {
        // error response
        res.status(500).json(error);
      });
  } catch (error) {
    // error response
    res.status(500).json(error);
  }
};
exports.listAdjustments = async (req, res) => {
  try {
    axios
      .get(process.env.MW_URL + "/v2/finance/list-adjustments", {
        headers: {
          Authorization: process.env.MW_AUTH,
        },
      })
      .then((response) => {
        // success response
        res.status(200).json(response.data);
      })
      .catch((error) => {
        // error response
        res.status(500).json(error);
      });
  } catch (error) {
    // error response
    res.status(500).json(error);
  }
}
exports.listCodManifests = async (req, res) => {
  try {
    axios
      .get(process.env.MW_URL + "/v2/finance/list-cod-manifests", {
        headers: {
          Authorization: process.env.MW_AUTH,
        },
      })
      .then((response) => {
        // success response
        res.status(200).json(response.data);
      })
      .catch((error) => {
        // error response
        res.status(500).json(error);
      });
  } catch (error) {
    // error response
    res.status(500).json(error);
  }
};
exports.reconcileInvoice = async (req, res) => {
  const invoice_id = req.url.split("/").pop();
  try {
    axios
      .post(process.env.MW_URL + "/v2/finance/reconcile-invoice/" + invoice_id, req.body, {
        headers: {
          Authorization: process.env.MW_AUTH,
        },
      })
      .then((response) => {
        // success response
        res.status(200).json(response.data);
      })
      .catch((error) => {
        // error response
        res.status(500).json(error);
      });
  } catch (error) {
    // error response
    res.status(500).json(error);
  }
};
exports.markAsPaid = async (req, res) => {
  const invoice_id = req.url.split("/").pop();
  try {
    axios
      .post(process.env.MW_URL + "/v2/finance/mark-as-paid/" + invoice_id, req.body, {
        headers: {
          Authorization: process.env.MW_AUTH,
        },
      })
      .then((response) => {
        // success response
        res.status(200).json(response.data);
      })
      .catch((error) => {
        // error response
        res.status(500).json(error);
      });
  } catch (error) {
    // error response
    res.status(500).json(error);
  }
}