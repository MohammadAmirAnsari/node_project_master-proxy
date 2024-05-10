require("dotenv").config();
let axios = require("axios");
const FormData = require("form-data");
axios.defaults.headers.common["Authorization"] = process.env.MW_AUTH;
exports.getHouseManifest = (req, res) => {
  page = req.query.page;
  axios
    .get(process.env.MW_URL + "/v2/customs/house?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    });
};
exports.deleteHouseManifest = (req, res) => {
  id = req.params.id;
  axios
    .delete(process.env.MW_URL + "/v2/customs/house/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.addHouseManifest = (req, res) => {
  let data = new FormData();
  data.append("data", JSON.stringify(req.body));
  data.append("file", req.files["file"].data, req.files["file"].name);
  axios
    .post(process.env.MW_URL + "/v2/orders/housemanifest", data, {
      headers: { "Content-Type": "multipart/form-data", Authorization: process.env.MW_AUTH },
    })
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getClientManifest = (req, res) => {
  let page = req.query.page;
  axios
    .get(process.env.MW_URL + "/v2/manifest/list?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getAirManifest = (req, res) => {
  page = req.query.page;
  axios
    .get(process.env.MW_URL + "/v2/customs/air?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.addAirManifest = (req, res) => {
  let data = new FormData();
  data.append("data", JSON.stringify(req.body));
  data.append("file", req.files["file"].data, req.files["file"].name);
  axios
    .post(process.env.MW_URL + "/v2/orders/housemanifestair", data, {
      headers: { "Content-Type": "multipart/form-data", Authorization: process.env.MW_AUTH },
    })
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.deleteAirManifest = (req, res) => {
  id = req.params.id;
  axios
    .delete(process.env.MW_URL + "/v2/customs/air/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.getDeclaration = (req, res) => {
  page = req.query.page;
  axios
    .get(process.env.MW_URL + "/v2/customs/declaration?page=" + page)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.addDeclaration = (req, res) => {
  let data = new FormData();
  data.append("data", JSON.stringify(req.body));
  data.append("file", req.files["file_data"].data, req.files["file_data"].name);
  axios
    .post(process.env.MW_URL + "/v2/orders/declaration", data, {
      headers: { "Content-Type": "multipart/form-data", Authorization: process.env.MW_AUTH },
    })
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
exports.deleteDeclaration = (req, res) => {
  id = req.params.id;
  axios
    .delete(process.env.MW_URL + "/v2/customs/declaration/" + id)
    .then((mwRes) => {
      res.status(mwRes.status).json(mwRes.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
};
