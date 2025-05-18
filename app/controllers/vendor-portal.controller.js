require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
axios.defaults.headers.common["Authorization"] = process.env.MW_AUTH;
const { createVendorUser } = require("../util/user");

exports.GetAllVendorServiceCodes = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorDeliveryInvoice/GetAllServiceCodes?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.UploadDeliveryInvoice = (req, res) => {
  const formData = new FormData();
  for (let i in req.files) {
    formData.append(i, req.files[i].data, req.files[i].name);
  }

  for (const [key, value] of Object.entries(req.body)) {
    formData.append(key, value);
  }

  let url = process.env.MW_URL + "/api/VendorDeliveryInvoice/Upload";
  axios
    .post(url, formData)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.UploadCustomAndDeliveryInvoice = (req, res) => {
  const formData = new FormData();
  for (let i in req.files) {
    formData.append(i, req.files[i].data, req.files[i].name);
  }

  for (const [key, value] of Object.entries(req.body)) {
    formData.append(key, value);
  }

  let url = process.env.MW_URL + "/api/VendorCustomInvoice/Upload";
  axios
    .post(url, formData)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.GetAllDeliveryInvoice = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorDeliveryInvoice/GetAll?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetAllDeliveryInvoiceForCreditNote = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorDeliveryInvoice/GetAllForCreditNote?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetAllCustomInvoiceForCreditNote = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCustomInvoice/GetAllForCreditNote?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetAllCustomAndDeliveryInvoice = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCustomInvoice/GetAll?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetDeliveryInvoiceHistory = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorDeliveryInvoice/GetHistory?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetCustomInvoiceHistory = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCustomInvoice/GetHistory?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.UpdateDeliveryInvoiceStatus = (req, res) => {
  let url = process.env.MW_URL + "/api/VendorDeliveryInvoice/UpdateStatus";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.UpdateCustomInvoiceStatus = (req, res) => {
  let url = process.env.MW_URL + "/api/VendorCustomInvoice/UpdateStatus";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.UploadCreditNote = (req, res) => {
  const formData = new FormData();
  for (let i in req.files) {
    formData.append(i, req.files[i].data, req.files[i].name);
  }

  for (const [key, value] of Object.entries(req.body)) {
    formData.append(key, value);
  }

  let url = process.env.MW_URL + "/api/VendorCreditNote/Upload";
  axios
    .post(url, formData)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetAllCreditNotes = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCreditNote/GetAll?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetCreditNoteHistory = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCreditNote/GetHistory?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.UpdateCreditNoteStatus = (req, res) => {
  let url = process.env.MW_URL + "/api/VendorCreditNote/UpdateStatus";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.UploadCodStatement = (req, res) => {
  const formData = new FormData();
  for (let i in req.files) {
    formData.append(i, req.files[i].data, req.files[i].name);
  }

  for (const [key, value] of Object.entries(req.body)) {
    formData.append(key, value);
  }

  let url = process.env.MW_URL + "/api/VendorCodStatement/Upload";
  axios
    .post(url, formData)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetAllCodStatements = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCodStatement/GetAll?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetCodStatementHistory = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCodStatement/GetHistory?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.UpdateCodStatementStatus = (req, res) => {
  let url = process.env.MW_URL + "/api/VendorCodStatement/UpdateStatus";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetApprovedCustomInvoiceForCod = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/VendorCustomInvoice/GetApprovedForCod?" + queryString;

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.ListVendors = (req, res) => {
  const queryString = new URLSearchParams(req.query).toString();
  let url = process.env.MW_URL + "/api/Vendor/GetAll?" + queryString;
  console.log(url);

  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.CreateVendor = (req, res) => {
  let url = process.env.MW_URL + "/api/Vendor/Create";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      if (mwRes.status === 200) {
        //as long as the vendor is created successfully, now we should create user.
        // build a custom request to create user in auth service.
        console.log("mwRes : ", mwRes.data);
        const user = {
          username: mwRes.data.data.contact_name,
          email: mwRes.data.data.contact_email,
          password: Math.random().toString(36).slice(-8),
          full_name: mwRes.data.data.contact_name,
          VendorCode: mwRes.data.data.code,
          roles: ["vp_vendor"],
        };
        createVendorUser(user)
          .then((userRes) => {
            console.log("userRes : ", userRes);
            const response = {
              status: 200,
              success: true,
              message: "Vendor and it's user created successfully , email is sent on the email to reset password",
              data: {
                vendor: mwRes.data.data,
                user: userRes,
              },
            };
            res.status(200).json(response);
          })
          .catch((error) => {
            const response = {
              status: 400,
              message: "Vendor created successfully, but error creating user , Please contact tech support",
              data: {
                message: error.message,
                errors: error.errors,
              },
            };
            console.log("error : ", error);
            res.status(400).json(response);
            // res.json({ status: 500, message: "Error creating user" });
          });
      } else {
        res.status(mwRes.status).json(mwRes.data);
      }
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.CreateVendorContract = (req, res) => {
  let url = process.env.MW_URL + "/api/VendorContract/Create";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.CreateVendorContractLine = (req, res) => {
  let url = process.env.MW_URL + "/api/VendorContractLine/Create";
  axios
    .post(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.GetVendorContracts = (req, res) => {
  let id = req.params.id;
  let url = process.env.MW_URL + "/api/VendorContract/GetById/" + id;
  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.UpdateVendorContract = (req, res) => {
  let id = req.params.id;
  let url = process.env.MW_URL + "/api/VendorContract/UpdateContract/" + id;
  console.log("url : ", url);
  axios
    .patch(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.UpdateVendorContractLine = (req, res) => {
  let id = req.params.id;
  let url = process.env.MW_URL + "/api/VendorContractLine/UpdateContractLine/" + id;
  console.log("url : ", url);
  axios
    .patch(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.GetVendorContractLines = (req, res) => {
  let id = req.params.id;
  let url = process.env.MW_URL + "/api/VendorContractLine/GetById/" + id;
  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.GetVendorById = (req, res) => {
  let id = req.params.id;
  let url = process.env.MW_URL + "/api/Vendor/GetById/" + id;
  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.GetVendorByCode = (req, res) => {
  let code = req.params.code;
  let url = process.env.MW_URL + "/api/Vendor/GetByCode/" + code;
  axios
    .get(url)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.AddVendorUser = (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    full_name: req.body.full_name,
    VendorCode: req.body.VendorCode,
    roles: ["vp_vendor"],
  };
  createVendorUser(user)
    .then((userRes) => {
      const response = {
        status: 200,
        success: true,
        message: "User created successfully , email is sent on the email to reset password",
        data: {
          user: userRes,
        },
      };
      res.status(200).json(response);
    })
    .catch((error) => {
      const response = {
        status: 400,
        message: "Error creating user , Please contact tech support",
        data: {
          message: error.message,
          errors: error.errors,
        },
      };
      console.log("error : ", error);
      res.status(400).json(response);
    });
};
exports.UpdateVendorExecutives = (req, res) => {
  let id = req.params.id;
  let url = process.env.MW_URL + "/api/Vendor/UpdateVendorExecutives/" + id;
  console.log("url : ", url);
  axios
    .patch(url, req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data);
    });
}
