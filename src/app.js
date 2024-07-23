require("dotenv").config();
require("express-async-errors");
const express = require("express");

const connectDb = require("./database/connect");
const routeNotFound = require("./middlewares/routeNotFoundMiddleware");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const productsRoutes = require("./routes/productsRoutes");

// setup the server and port
const app = express();
const port = process.env.PORT || 3000;

// parser
app.use(express.json());

// serve the root route
app.get("/", (_, res) => {
  res.send("<h1>File Upload API</h1>");
});

// routes
app.use("/api/v1/products", productsRoutes);

// setup the middleware functions
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
