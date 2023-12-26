require('dotenv').config()
const axios = require('axios');

exports.pushSaleDataToMw = (req, res) => {
    console.log(req.query);
    console.log("req.query.data : ", req.query.data);
    axios
        .get("https://apix.asyadexpress.com/v2/scale?data="+req.query.data,)
        .then(invRes => {
            console.log("invRes.data : ", invRes.data)
           
        })
        .catch(error => {
            
        });
         res.status(200).json({"Message" : "Pushed"})
};