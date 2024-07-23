const { StatusCodes } = require("http-status-codes");

const Product = require("../models/productSchema");

const getAllProducts = async (req, res, next) => {
  const allProducts = await Product.find({});
  res.status(StatusCodes.OK).json({ allProducts });
};

const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

module.exports = { getAllProducts, createProduct };
