const router = require("express").Router();

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productsController");

const { uploadProductImageCloud } = require("../controllers/uploadsController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImageCloud);

module.exports = router;
