require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");

exports.fetchAllDrivers = async (req, res) => {
  const page = req.query.page;
  const search = req.query.search;
  try {
    axios
        .get(process.env.DRIVER_URL + "/api/drivers?page=" + page+"&search=" + search)
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
exports.fetchAllBanks = async (req, res) => {
  const page = req.query.page;
  try {
    axios
        .get(process.env.DRIVER_URL + "/api/banks")
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
exports.createDriver = async (req, res) => {
  try {
    const jsonobject = JSON.stringify(req.body.driverData);
    axios
        .post(process.env.DRIVER_URL + "/api/drivers" ,jsonobject,{headers:{'content-type':'application/json'}})
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
      .get(process.env.DRIVER_URL + "/api/drivers/"+id)
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
exports.fetchAllReports = async (req, res) => {
  const page = req.query.page;
  const status = req.query.status;
  try {
    axios
        .get(process.env.DRIVER_URL + "/api/reports?page=" + page+'&status='+status)
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
exports.fetchReport = async (req, res) => {
  const id = req.params.id;
  const hub = req.query.hub??'';
  try {
    axios
        .get(process.env.DRIVER_URL + "/api/reports/"+id+"?hub=" + hub)
        .then((response) => {
          // console.log(response);
          res.status(200).json(response.data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.createPayment = async (req, res) => {
  try {
    axios
      .post(process.env.DRIVER_URL + "/api/reports", req.body)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        if (Object.keys(error.response.data.errors).length > 0) {
          const error_string = JSON.stringify(error.response.data.errors);
          res.status(error.response.status).json(error_string);
        }else{
          res.status(error.response.status).json(error.response.data.message);
        }

      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.sendFinance = async (req, res) => {
  try {
    const id = req.params.id;
    axios
      .get(process.env.DRIVER_URL + "/api/reports/sendfinance/"+id)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
          res.status(error.response.status).json(error.response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.muscatBank = async (req, res) => {
  try {
    const id = req.params.id;
    axios
      .get(process.env.DRIVER_URL + "/api/reports/muscatbank/"+id)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
          res.status(error.response.status).json(error.response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.otherBanks = async (req, res) => {
  try {
    const id = req.params.id;
    axios
      .get(process.env.DRIVER_URL + "/api/reports/otherbanks/"+id)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
          res.status(error.response.status).json(error.response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.sendFinish = async (req, res) => {
  try {
    const id = req.params.id;
    axios
      .get(process.env.DRIVER_URL + "/api/reports/sendfinish/"+id)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
          res.status(error.response.status).json(error.response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatePayment = async (req, res) => {
try {
    const id = req.params.id;
    const jsonobject = JSON.stringify(req.body.reportJson);

    axios
      .put(process.env.DRIVER_URL + "/api/reports/"+id, jsonobject,{headers:{'content-type':'application/json'}})
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
          console.log(error);
          res.status(error.response.status).json(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
