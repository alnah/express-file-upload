const path = require("path");
const fs = require("fs");

const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res, next) => {
  const productImage = req.files.image;

  const uploadsDir = path.join(__dirname, "../../public/uploads");
  const imagePath = path.join(uploadsDir, productImage.name.toLowerCase());

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  await productImage.mv(imagePath);
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name.toLowerCase()}` } });
};

module.exports = { uploadProductImage };
