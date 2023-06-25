const mongoose = require("mongoose");

//product schema
let productSchema = new mongoose.Schema({
  products: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
},{timestamps:true});
let PRODUCT = mongoose.model("MYPRODUCTSCHEMA,", productSchema);

module.exports = PRODUCT;
