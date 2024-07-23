const { StatusCodes } = require("http-status-codes");

const Product = require("../models/productSchema");

const getAllProducts = async (req, res, next) => {
  res.send("get all products");
};

const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.OK).json({ product });
};

module.exports = { getAllProducts, createProduct };
