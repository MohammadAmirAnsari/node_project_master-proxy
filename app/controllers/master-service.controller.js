require('dotenv').config()
const axios = require('axios');
const FormData = require('form-data');
const fs = require("fs");
axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
console.log("process.env.MW_AUTH : ",process.env.MW_AUTH)
exports.getMasterServices = (req, res) => {
  let page = req.query.page || 1;
  let status = req.query.status || null;
  let url = process.env.MW_URL + "/v2/rate-service?page=" + page;
  if (status != null) {
    url += "&status=" + status
  }
  axios
    .get(url)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log("error : ", error);
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getMasterServicesGroup = (req, res) => {
  let page = req.query.page || 1
  axios
    .get(process.env.MW_URL + "/v2/service-group-master?page=" + page)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getServiceTypesDropDown = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/service-type-master/dropdown")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createServiceGroup = (req, res) => {
  console.log("req.body : ", req.body)
  axios
    .post(process.env.MW_URL + "/v2/service-group-master", req.body)
    .then(mwRes => {
      console.log("mwRes.data : ", mwRes.data)
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};

exports.getServiceTypeMaster = (req, res) => {
  let page = req.query.page || 1
  axios
    .get(process.env.MW_URL + "/v2/service-type-master?page=" + page)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};

exports.createServiceType = (req, res) => {
  console.log("req.body : ", req.body)
  axios
    .post(process.env.MW_URL + "/v2/service-type-master", req.body)
    .then(mwRes => {
      console.log("mwRes.data : ", mwRes.data)
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getServiceGroupDropDown = (req, res) => {
  let service_type = req.query.service_type || ""
  axios
    .get(process.env.MW_URL + "/v2/service-group-master/dropdown?service_type=" + service_type)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createRateService = (req, res) => {
  req.body.status = false;
  if (req.roleName == 'finance_admin' || req.roleName == 'super_admin') {
    req.body.status = true;
  }
  axios
    .post(process.env.MW_URL + "/v2/rate-service", req.body)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {

      res.status(error.response.status).json(error.response.data)

    });
};
exports.getServiceRate = (req, res) => {
  let service_code = req.query.service_code || ""
  axios
    .get(process.env.MW_URL + "/v2/rate-service/" + service_code)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};

exports.getCountries = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/countries")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editRateService = (req, res) => {
  let service_code = req.query.service_code || ""
  axios
    .patch(process.env.MW_URL + "/v2/rate-service/" + service_code, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getGovernorates = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/governorates")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getRate_service = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/internal-rate-service")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getCities = (req, res) => {
  let country = req.query.country || ""
  axios
    .get(process.env.MW_URL + "/v2/countries/" + country + "/cities")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getOmanWilayat = (req, res) => {
  let governorate = req.query.governorate || ""
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/wilayat/" + governorate)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getOmanCity = (req, res) => {
  let wilaya = req.query.wilaya || ""
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/cities/" + wilaya)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getOmanArea = (req, res) => {
  let omanCity = req.query.omanCity || ""
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/area/" + omanCity)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getZipCode = (req, res) => {
  let omanArea = req.query.omanArea || ""
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/zip-code/" + omanArea)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getBillingCycle = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/billing-cycle/billing-cycle")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};

exports.createClientMaster = (req, res) => {

  const form = new FormData();
  for (let i in req.files) {
    console.log("i : ", i);
    form.append(i, req.files[i].data, req.files[i].name)
  }
  for (const [key, value] of Object.entries(req.body)) {
    form.append(key, value);
  }
  console.log("form : ", form);
  axios
    .post(process.env.MW_URL + "/internal/user/master-user", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createUser = (req, res) => {
  axios
    .post(process.env.MW_URL + "/internal/user-clients/create-user",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};

exports.getClientMaster = (req, res) => {
  let page = req.query.page || 0
  let status = req.query.status || null;
  let url = process.env.MW_URL + "/internal/user/client-master?page=" + page;
  if (status != null) {
    url += "&status=" + status
  }
  axios
    .get(url)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getClienstUsers = (req, res) => {
  let page = req.query.page || 0
  let status = req.query.status || null;
  let url = process.env.MW_URL + "/internal/user-clients/client-users?page=" + page;
  if (status != null) {
    url += "&status=" + status
  }
  axios
    .get(url)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getClientUsers = (req, res) => {
  let merchant_code = req.query.merchant_code || 0
  axios
    .get(process.env.MW_URL + "/internal/user-clients/client-users-by-merchant/" + merchant_code)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getClient = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/internal/user/show-client-master?id=" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editClientMaster = (req, res) => {
  
  let id = req.query.id || 0;
  const form = new FormData();
  for (let i in req.files) {
    form.append(i, req.files[i].data, req.files[i].name)
  }
  for (const [key, value] of Object.entries(req.body)) {
    form.append(key, value);
  }
 
  axios
    .post(process.env.MW_URL + "/internal/user/edit-client-master?id=" + id, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getClientPendingCount = (req, res) => {

  let url = process.env.MW_URL + "/internal/user/pending-count";

  axios
    .get(url)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.approveClient = (req, res) => {
  let merchant_code = req.query.merchant_code || 0
  axios
    .get(process.env.MW_URL + "/internal/user/approve/" + merchant_code)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getMasterServicesPendingCount = (req, res) => {

  let url = process.env.MW_URL + "/v2/rate-service/pending-count";

  axios
    .get(url)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};

exports.approveServiceMaster = (req, res) => {
  let service_code = req.query.service_code || ""
  axios
    .get(process.env.MW_URL + "/v2/rate-service/approve/" + service_code)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};

exports.getServiceRateByType = (req, res) => {
  let service_type = req.query.service_type || ""
  axios
    .get(process.env.MW_URL + "/v2/rate-service-list/service-by-type/" + service_type)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getServiceRateByGroup = (req, res) => {
  let service_group = req.query.service_group || ""
  axios
    .get(process.env.MW_URL + "/v2/rate-service-list/service-by-group/" + service_group)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
  };
exports.getFulfillmentClients = (req, res) => {
  
  axios
    .get(process.env.MW_URL + "/v2/fulfillment-clients")
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getAvailableIntegration = (req, res) => {
  let page = req.query.page || 1;
  axios
    .get(process.env.MW_URL + "/v2/available-integration?page=" + page)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getClientsIntegrationList = (req, res) => {
  let page = req.query.page || 1;
  axios
    .get(process.env.MW_URL + "/v2/client-integration-list?page=" + page)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getAllAvailableCodes = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/all-integration-codes")
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createClientIntegration = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/integration-clients", req.body)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getAllAvailableClients = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/not-integration-client")
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.pushAmazonFakeEvents = (req, res) => {
  axios
    .post(process.env.MW_URL + "/internal/amazon/amazon-fake-events-pusher", req.body)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.pushAmazonBoeFile = (req, res) => {

  const formData = new FormData();
  let files = Object.keys(req.files)
  files.map(function(filekey, key) {
    let file = req.files[filekey];
    formData.append('file['+key+']' , file.data, { filename: file.name });
  });



  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization' : 'Bearer 3BDF0A7D-6A16-4817-93D0-3E420EBA27DC'
  };

  axios
    .post(process.env.MW_URL + "/internal/amazon/boe-upload", formData , {headers})
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.uploadCBM = (req, res) => {

  const form = new FormData();
  for (let i in req.files) {
    console.log("i : ", i);
    form.append(i, req.files[i].data, req.files[i].name)
  }
  
  console.log("req.files ", req.files);
  axios
    .post(process.env.MW_URL + "/v2/upload/cbm", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.uploadPS = (req, res) => {

  const form = new FormData();
  for (let i in req.files) {
    console.log("i : ", i);
    form.append(i, req.files[i].data, req.files[i].name)
  }

  console.log("req.files ", req.files);
  axios
    .post(process.env.MW_URL + "/v2/upload/ps", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.generateHalbanBillingReport = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/wms-billing-report", req.body)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
