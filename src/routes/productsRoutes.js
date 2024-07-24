const router = require("express").Router();

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productsController");

const { uploadProductImageLocal } = require("../controllers/uploadsController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImageLocal);

module.exports = router;
