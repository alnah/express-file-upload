const { StatusCodes } = require("http-status-codes");

const Product = require("../models/productSchema");

const getAllProducts = async (req, res, next) => {
  res.send("get all products");
};

const createProduct = async (req, res, next) => {
  res.send("create product");
};

module.exports = { getAllProducts, createProduct };
