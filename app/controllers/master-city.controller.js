require('dotenv').config()
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
console.log("process.env.MW_AUTH : ",process.env.MW_AUTH)

exports.createCountry = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/countries-master/add-country",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editCountry = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/countries-master/edit/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.activateCountry = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/countries-master/updateactive/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getCountriesMaster = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/countries-master/get-countries")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getCountry = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/v2/countries-master/show/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createGovernorate = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/governorates/add-governorate",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editGovernorate = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/governorates/edit/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getGovernorate = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/v2/governorates/show/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getGovernorateByCountries = (req, res) => {
  let id = req.query.country || 0
  axios
    .get(process.env.MW_URL + "/v2/governorates/countries/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getGovernoratesMaster = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/governorates/governorates")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};

exports.createWilayat = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/wilayat/add-wilayat",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editWilayat = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/wilayat/edit/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getWilayat = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/v2/wilayat/show/" + id)
    .then(mwRes => {
      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getWilayatMaster = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/wilayat/wilayat")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getCitiesMaster = (req, res) => {
  let country = req.query.country || ""
  axios
    .get(process.env.MW_URL + "/v2/cities/cities")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createCity = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/cities/add-city",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editCity = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/cities/edit/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getCity = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/v2/cities/show/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getCitiesByCountry = (req, res) => {
  let id = req.query.country || 0
  axios
    .get(process.env.MW_URL + "/v2/cities/country/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.activateCity = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/cities/updateactive/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};

exports.getAreaMaster = (req, res) => {
  let country = req.query.country || ""
  axios
    .get(process.env.MW_URL + "/v2/areas/areas")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createArea = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/areas/add-area",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editArea = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/areas/edit/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getArea = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/v2/areas/show/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};
exports.activateArea = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/areas/updateactive/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getEventCodes = (req, res) => {
  axios
    .get(process.env.MW_URL + "/v2/event-code/eventcode")
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.createEventCode = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/event-code/add",  req.body)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.editEventCode = (req, res) => {
  let id = req.query.id || ""
  axios
    .post(process.env.MW_URL + "/v2/event-code/edit/" + id, req.body)

    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      console.log(error)
      res.status(error.response.status).json(error.response.data)
    });
};
exports.getEventCode = (req, res) => {
  let id = req.query.id || 0
  axios
    .get(process.env.MW_URL + "/v2/event-code/show/" + id)
    .then(mwRes => {

      res.status(mwRes.status).json(mwRes.data)
    })
    .catch(error => {
      res.status(error.response.status).json(error.response.data)
    });
};


