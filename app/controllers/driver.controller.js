require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: process.env.DRIVER_AUTH,
    }
};

exports.fetchAllDrivers = async (req, res) => {
  const page = req.query.page;
  const search = req.query.search;
  try {
    axios
        .get(process.env.DRIVER_URL + "/api/drivers?page=" + page+"&search=" + search,config)
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
        .get(process.env.DRIVER_URL + "/api/banks",config)
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
      let data = new FormData();
      data.append("driverData", req.body.driverData);
      if(req.files){
          if(req.files["profile"]) {
              data.append("profile", req.files["profile"].data, req.files["profile"].name);
          }
          if(req.files["contract"]) {
              data.append("contract", req.files["contract"].data, req.files["contract"].name);
          }
          if(req.files["police_certificate"]) {
              data.append("police_certificate", req.files["police_certificate"].data, req.files["police_certificate"].name);
          }
          if(req.files["applications_form"]) {
              data.append("applications_form", req.files["applications_form"].data, req.files["applications_form"].name);
          }
          if(req.files["driver_standards"]) {
              data.append("driver_standards", req.files["driver_standards"].data, req.files["driver_standards"].name);
          }
          if(req.files["license_card1_front"]) {
              data.append("license_card1_front", req.files["license_card1_front"].data, req.files["license_card1_front"].name);
          }
          if(req.files["license_card1_back"]) {
              data.append("license_card1_back", req.files["license_card1_back"].data, req.files["license_card1_back"].name);
          }
          if(req.files["license_card2_front"]) {
              data.append("license_card2_front", req.files["license_card2_front"].data, req.files["license_card2_front"].name);
          }
          if(req.files["license_card2_back"]) {
              data.append("license_card2_back", req.files["license_card2_back"].data, req.files["license_card2_back"].name);
          }
          if(req.files["civil_card_front"]) {
              data.append("civil_card_front", req.files["civil_card_front"].data, req.files["civil_card_front"].name);
          }
          if(req.files["civil_card_back"]) {
              data.append("civil_card_back", req.files["civil_card_back"].data, req.files["civil_card_back"].name);
          }
          if(req.files["driver_license_card_front"]) {
              data.append("driver_license_card_front", req.files["driver_license_card_front"].data, req.files["driver_license_card_front"].name);
          }
          if(req.files["driver_license_card_back"]) {
              data.append("driver_license_card_back", req.files["driver_license_card_back"].data, req.files["driver_license_card_back"].name);
          }
      }

    axios
        .post(process.env.DRIVER_URL + "/api/drivers" ,data,{
            headers: { "Content-Type": "multipart/form-data", Authorization: process.env.DRIVER_AUTH },
        })
        .then((response) => {
            console.log(response);
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
      .get(process.env.DRIVER_URL + "/api/drivers/"+id,config)
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
        .get(process.env.DRIVER_URL + "/api/reports?page=" + page+'&status='+status,config)
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
  const hold = req.query.hold??'';
  try {
    axios
        .get(process.env.DRIVER_URL + "/api/reports/"+id+"?hub=" + hub+"&hold=" + hold,config)
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
      .post(process.env.DRIVER_URL + "/api/reports", req.body,config)
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
      .get(process.env.DRIVER_URL + "/api/reports/sendfinance/"+id,config)
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
      .get(process.env.DRIVER_URL + "/api/reports/muscatbank/"+id,config)
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
exports.paymentAdvice = async (req, res) => {
  try {
    const id = req.params.id;
    axios
      .get(process.env.DRIVER_URL + "/api/reports/paymentadvice/"+id,config)
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
      .get(process.env.DRIVER_URL + "/api/reports/otherbanks/"+id,config)
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
      .get(process.env.DRIVER_URL + "/api/reports/sendfinish/"+id,config)
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

exports.deletePayment = async (req, res) => {
  try {
    const id = req.params.id;
    axios
      .delete(process.env.DRIVER_URL + "/api/reports/"+id,config)
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
    let data = new FormData();
    data.append("file", req.files["file"].data, req.files["file"].name);
    data.append("_method", 'PUT');

    axios
      .post(process.env.DRIVER_URL + "/api/reports/"+id, data,{
          headers: { "Content-Type": "multipart/form-data", Authorization: process.env.DRIVER_AUTH },
      })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
          res.status(error.response.status).json(error.response.data.message);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.finishreportedit = async (req, res) => {
    const id = req.params.id;
    const hub = req.query.hub??'';
    try {
        axios
            .get(process.env.DRIVER_URL + "/api/reports/finishreportedit/"+id+"?hub=" + hub,config)
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