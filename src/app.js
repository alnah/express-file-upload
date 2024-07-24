require("dotenv").config();
require("express-async-errors");
const express = require("express");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

const connectDb = require("./database/connect");
const routeNotFound = require("./middlewares/routeNotFoundMiddleware");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const productsRoutes = require("./routes/productsRoutes");

// setup the server and port
const app = express();
const port = process.env.PORT || 3000;

// setup cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// serve static files
app.use(express.static("./public"));

// setup parser
app.use(express.json());

// setup file-uploader
app.use(fileUpload({ useTempFiles: true }));

// serve the root route
app.get("/", (_, res) => {
  res.send("<h1>File Upload API</h1>");
});

// setup main api route
app.use("/api/v1/products", productsRoutes);

// setup errors
app.use(routeNotFound);
app.use(errorHandler);

// define a helper to start the server
const start = async () => {
  try {
    connectDb(process.env.MONGO_URI);
    console.log("Connected successfully to the database!");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error(error);
  }
};

// start the server
start();
