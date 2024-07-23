const router = require("express").Router();

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productsController");

const { uploadProductImage } = require("../controllers/uploadsController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
