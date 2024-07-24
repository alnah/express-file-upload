const path = require("path");
const fs = require("fs");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const MAX_SIZE = 1024 * 1024;

const uploadProductImage = async (req, res, next) => {
  if (!req.files) {
    throw new BadRequestError("No file uploaded.");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please upload an image.");
  }

  if (productImage.size > MAX_SIZE) {
    throw new BadRequestError(
      `Please upload image smaller than ${MAX_SIZE / (1024 * 1024)}MB.`
    );
  }

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
