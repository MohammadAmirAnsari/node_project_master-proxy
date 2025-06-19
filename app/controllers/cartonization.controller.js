require('dotenv').config()
const axios = require('axios');

axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
exports.CartonizationList = (req, res) => {
    let url = process.env.MW_URL + "/v2/cartonization/list"
    console.log("url : ", url);
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.CartonizationStatusList = (req, res) => {
    let url = process.env.MW_URL + "/v2/cartonization/carton-statuses-list"
    console.log("url : ", url);
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.CartonizationItems = (req, res) => {
    let id = req.params.id;
    let url = process.env.MW_URL + "/v2/cartonization/carton-items/" + id
    console.log("url : ", url);
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.AvailableCartons = (req, res) => {
    
    let url = process.env.MW_URL + "/v2/cartonization/available-cartons"
    console.log("url : ", url);
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}
exports.UpdateCartonItems = (req, res) => {
    let id = req.params.id;
    let url = process.env.MW_URL + "/v2/cartonization/"+id
    console.log("url : ", url);
    console.log("req.body : ", req.body);
    axios.put(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}
exports.ChangeStatus = (req, res) => {
    let id = req.params.id;
    let url = process.env.MW_URL + "/v2/cartonization/change-status/" + id
    console.log("url : ", url);
    console.log("req.body : ", req.body);
    axios.post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}
exports.CartonizationRequestLogs = (req, res) => {
    let id = req.params.id;
    let url = process.env.MW_URL + "/v2/cartonization/carton-logs/" + id
    console.log("url : ", url);
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}