const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  id: { type: String, require: true },
  main_title: { type: String, require: true },
  title: { type: String, require: true },
  product_image: { type: String, require: true },
  plant_image: { type: String, require: true },
  description: { type: String, require: true },
  company: { type: String, require: true },
});

const products = new model("products", productSchema);

module.exports = products;
