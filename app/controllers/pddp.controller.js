require("dotenv").config();
const axios = require("axios");
exports.generateReport = async (req, res) => {
  body = req.body;
  try {
    axios
      .post(process.env.PDDP_URL + "/api/report", body)
      .then((response) => {
        const fileBuffer = response.data;
        const fileName = response.headers["content-disposition"].split("=")[1];
        res.setHeader("Content-Type", "application/download");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
        res.status(200).send(fileBuffer);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
