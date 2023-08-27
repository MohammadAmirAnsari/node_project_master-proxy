require("dotenv").config();
const axios = require("axios");
axios.defaults.headers.common["Authorization"] = process.env.MW_AUTH;

exports.createOmanGovernorate = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/oman-governorates/add-governorate", req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.editOmanGovernorate = (req, res) => {
  let id = req.query.id || "";
  axios
    .patch(process.env.MW_URL + "/v2/oman-governorates/edit-governorate/" + id, req.body)

    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getOmanGovernorate = (req, res) => {
  let id = req.query.id || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/show-governorate/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.editGovernorate = (req, res) => {
  let id = req.query.id || "";
  axios
    .patch(process.env.MW_URL + "/v2/governorates/edit/" + id, req.body)

    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};

exports.getOmanGovernoratesMaster = (req, res) => {
  let page = req.query.page || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/governorates?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getOmanWilayatsMaster = (req, res) => {
  let page = req.query.page || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/wilayat?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.createOmanWilayat = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/oman-governorates/add-wilayat", req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.editOmanWilayat = (req, res) => {
  let id = req.query.id || "";
  axios
    .patch(process.env.MW_URL + "/v2/oman-governorates/edit-wilayat/" + id, req.body)

    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getOmanWilayat = (req, res) => {
  let id = req.query.id || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/show-wilayat/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getOmanCitiesMaster = (req, res) => {
  let page = req.query.page || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/cities?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.createOmanCity = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/oman-governorates/add-city", req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);

      res.status(error.response.status).json(error.response.data);
    });
};
exports.editOmanCity = (req, res) => {
  let id = req.query.id || "";
  axios
    .patch(process.env.MW_URL + "/v2/oman-governorates/edit-city/" + id, req.body)

    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getOmanCity = (req, res) => {
  let id = req.query.id || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/show-city/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getOmanAreasMaster = (req, res) => {
  let page = req.query.page || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/areas?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};

exports.createOmanArea = (req, res) => {
  axios
    .post(process.env.MW_URL + "/v2/oman-governorates/add-area", req.body)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};

exports.editOmanArea = (req, res) => {
  let id = req.query.id || "";
  axios
    .patch(process.env.MW_URL + "/v2/oman-governorates/edit-area/" + id, req.body)

    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};

exports.getOmanArea = (req, res) => {
  let id = req.query.id || 0;
  axios
    .get(process.env.MW_URL + "/v2/oman-governorates/show-area/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
