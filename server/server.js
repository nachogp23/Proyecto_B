//------------------------------ START IMPORTS ----------------------------
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//Import of file with most common HTTP errors
//const HTTPSTATUSCODE = require("./utils/httpStatusCode");

//Import DB connection method
const dataBase = require("./api/utils/connect");

// Express APIs
const user = require("./api/routes/user.routes");
// Define PORT
const port = process.env.PORT || 4000;

//--------------------------------- END IMPORTS -----------------------------



//Start the server with express
const server = express();



//--------------------------------  START  CORS -----------------------------------
//Config of response's headers for CORS use
server.use((req, res, next) => {
  res.header("Acces-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Acces-Control-Allow-Credentials", true);
  res.header("Acces-Control-Allow-Headers", "Content-Type");
  next();
});

//CORS config
server.use(
  cors({
    origin: ["http://localhost:4200", "http://localhost:3000"],
    credentials: true,
  })
);
//----------------------------------END  CORS--------------------------------------




//----------------------------  START  Express settings  ----------------------------
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Serve static resources
server.use("/public", express.static("public"));
server.use("/api", user);

// Express error handling
server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

//Middleware Error handler
server.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//call to Error 404 when the route is not found
server.use("*", (_req, _res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
//----------------------------  END Express settings  ----------------------------


//Start connection with DB and then make the server listen to the configured PORT
dataBase.connect().then(() => {
  console.log("Connection with mongoDB done!");
  server.listen(port, () => {
    console.log("Connected to port: " + port);
  });
});

