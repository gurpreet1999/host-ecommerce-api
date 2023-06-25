const express = require("express");
const { createProduct, getProduct, deleteProduct, updateQuantity } = require("../controllers/productController.js");
const productRoute = express.Router();

//all the routes
productRoute.post('/product/create',createProduct)
productRoute.get('/products',getProduct)
productRoute.delete('/product/:id',deleteProduct)
productRoute.put('/product/:id/:updateValue',updateQuantity)






module.exports = productRoute;