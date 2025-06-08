const products = require("../models/product-model.js");

const product = async (req, res) => {
  try {
    const response = await products.find();
    if (!response) {
      res.status(404).json({ msg: "No Products Found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`product : ${error}`);
  }
};

module.exports = product;
