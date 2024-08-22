require('dotenv').config()
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
exports.scaleDataList = (req, res) => {
    let url = process.env.MW_URL + "/v2/scale-data-list"
    axios
        .post(url, req.body)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)

        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
};