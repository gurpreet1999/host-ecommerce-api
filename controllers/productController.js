const PRODUCT = require("../models/productModel");

//function to get all products
async function getProduct(req, res) {
  try {
    let allproduct = await PRODUCT.find({});
    res.status(200).json({
      success: true,
      allproduct,
    });
  } catch (err) {
    consiole.log(err);
  }
}

//function to create products
async function createProduct(req, res) {
  try {
    const { name, quantity } = req.body;

    let product = await PRODUCT.find({});

    if (product.length === 0) {
      let products = [{ name: name, quantity: quantity }];
      product = await PRODUCT.create({
        products: products,
      });
      if (!product) {
        res.status(200).json({
          success: true,
          msg: "coudnt create product",
        });
      }

      res.status(200).json({
        success: true,
        product,
      });
    }

    let obj = {
      name: name,
      quantity: quantity,
    };

    product[0].products.push(obj);
    await product[0].save();

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
  }
}

//funcvtion to delete the products
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    let data = await PRODUCT.find({});
    let document = data[0];

    let product = await document.updateOne({
      $pull: { products: { _id: id } },
    });

    if (!product) {
      res.status(400).json({
        success: false,
        msg: "coudnt delete the product",
      });
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
  }
}

//function to update the quantity
async function updateQuantity(req, res) {
  try {
    const { id, updateValue } = req.params;
    console.log(updateValue)

    let product = await PRODUCT.updateOne(
      { "products._id": id },
      { $inc: { "products.$.quantity": updateValue } }
    );

    if (!product) {
      res.status(400).json({
        success: false,
        msg: "coudnt update the product",
      });
    }

    res.status(400).json({
      success: false,
      product,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createProduct, deleteProduct, getProduct, updateQuantity };
