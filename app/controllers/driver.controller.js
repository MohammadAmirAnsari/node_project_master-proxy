require("dotenv").config();
const axios = require("axios");
exports.fetchAllDrivers = async (req, res) => {
  const page = req.query.page;
  try {
    axios
      .get(process.env.DRIVER_URL + "/api/drivers?page=" + page)
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

exports.fetchDriver = async (req, res) => {
  const id = req.params.id;
  try {
    axios
      .get(process.env.DRIVER_URL + "/api/driver/"+id)
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
      .post(process.env.DRIVER_URL + "/v2/irto", req.body)
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
