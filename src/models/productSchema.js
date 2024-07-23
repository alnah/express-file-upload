const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required."],
  },
  price: {
    type: Number,
    required: [true, "Price field is required"],
  },
  image: {
    type: String,
    required: [true, "Image field is required"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
