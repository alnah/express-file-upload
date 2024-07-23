const router = require("express").Router();

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productsController");

router.route("/").get(getAllProducts).post(createProduct);

module.exports = router;
