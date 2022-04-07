var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { pageTitle: "Porular Exchanges" });
// });

const getData = async () => {
  //https://www.cryptingup.com/api/markets`;

  try {
    const response = await axios.get(
      `https://www.cryptingup.com/api/exchanges`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

router.get("/", async (req, res) => {
  try {
    const data = await getData();
    return res.render("index", {
      pageTitle: "Porular Exchanges",
      exchanges: data.exchanges,
    });
  } catch (err) {
    return res.status(404).render("error", { message: err.message });
  }
});

module.exports = router;
