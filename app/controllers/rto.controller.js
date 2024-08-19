require("dotenv").config();
const axios = require("axios");
exports.fetchAllRto = async (req, res) => {
  const page = req.query.page;
  try {
    axios
      .get(process.env.MW_URL + "/v2/irto?page=" + page)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.fetchRtoByCountryMerchant = async (req, res) => {
  // merchant is after irto in the url /v2/irto/{merchant}/{country}
  const merchant = req.url.split("/")[3];
  const country = req.url.split("/")[5];
  try {
    axios
      .get(process.env.MW_URL + "/v2/irto/" + merchant + "/" + country)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.fetchMerchants = async (req, res) => {
  try {
    axios
      .get(process.env.MW_URL + "/v2/irto/merchants")
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.createOrders = async (req, res) => {
  try {
    axios
      .post(process.env.MW_URL + "/v2/irto", req.body)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        if (Object.keys(error.response.data.data.errors).length > 0) {
          const error_string = JSON.stringify(Object.values(Object.values(error.response.data.data.errors)[0])[0]);
          res.status(500).json(error_string);
        }
        res.status(500).json(error.response.data.message);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.updateOrders = async (req, res) => {
  const irto_id = req.params.id;
  try {
    axios
      .put(process.env.MW_URL + "/v2/irto/"+irto_id, req.body)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.listOrders = async (req, res) => {
   const type = req.query.type;
   const url = type === "completed" || type === "manual" ? "/" + type : "";
   const page = req.query.page;
  try {
    axios
      .get(process.env.MW_URL + "/v2/irto/list" + url + "?page=" + page)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.listAddresses = async (req, res) => {
  // merchant and country is in query params
  const merchant_code = req.query.merchant_code;
  const country = req.query.country;
  try {
    axios
      .get(process.env.MW_URL + "/v2/irto/addresses" + "?merchant_code=" + merchant_code + "&country=" + country)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.bulkUpdateOrders = async (req, res) => {
  try {
    axios
      .post(process.env.MW_URL + "/v2/irto/bulk-update", req.body)
      .then((response) => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};