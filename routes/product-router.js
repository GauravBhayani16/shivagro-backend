const express = require("express");
const product = require("../controllers/product-controller.js");
const router = express.Router();

router.route("/products").get(product);

module.exports = router;
