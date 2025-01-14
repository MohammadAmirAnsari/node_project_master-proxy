require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
exports.createCourierInvoice = async (req, res) => {
  let data = new FormData();
  data.append("data", JSON.stringify(req.body));
  if (req.files["invoice_pdf"]) {
    data.append("invoice_pdf", req.files["invoice_pdf"].data, req.files["invoice_pdf"].name);
  }

  data.append("invoice_excel", req.files["invoice_excel"].data, req.files["invoice_excel"].name);
  data.append("data", JSON.stringify(req.body));
  try {
    axios
      .post(process.env.MW_URL + "/v2/courier-invoice", data, {
        headers: {
          "Content-Type": "multipart/form-data",
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
exports.listCourierInvoice = async (req, res) => {
  const courier_code = req.url.split("/").pop();
  try {
    axios
      .get(process.env.MW_URL + "/v2/list-courier-invoice/" + courier_code, {
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
exports.listCustomsAndDutyInvoice = async (req, res) => {
  const courier_code = req.url.split("/").pop();
  try {
    axios
      .get(process.env.MW_URL + "/v2/list-custom-and-duty-invoice/" + courier_code, {
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
exports.createCustomsAndDutyInvoice = async (req, res) => {
  let data = new FormData();
  data.append("data", JSON.stringify(req.body));
  if (req.files["invoice_pdf"]) {
    data.append("invoice_pdf", req.files["invoice_pdf"].data, req.files["invoice_pdf"].name);
  }
  data.append("invoice_excel", req.files["invoice_excel"].data, req.files["invoice_excel"].name);
  data.append("data", JSON.stringify(req.body));
  try {
    axios
      .post(process.env.MW_URL + "/v2/courier-invoice/custom-and-duty", data, {
        headers: {
          "Content-Type": "multipart/form-data",
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
