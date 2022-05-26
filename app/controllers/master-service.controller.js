require('dotenv').config()
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
exports.getMasterServices = (req, res) => {
  let page = req.query.page || 1
  axios
    .get(process.env.MW_URL + "/v2/rate-service?page=" + page)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
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
exports.editRateService = (req, res) => {
  let service_code = req.query.service_code || ""
  axios
    .patch(process.env.MW_URL + "/v2/rate-service/" + service_code,req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};