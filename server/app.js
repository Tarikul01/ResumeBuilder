const express = require("express");
const app = express();
const router = require("./src/routers/api");
const mongoose = require("mongoose");
const path = require("path")

//Security middleware import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const bodyParser = require("body-parser");

global.__basedir=__dirname;

//security middleware implement

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors())
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}))
app.use(express.static(path.join(__dirname, "uploads")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//Request rate-limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Database connections
const options = { user: "", pass: "", autoIndex: true };
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL, options, (err) => {
  if (!err) {
    console.log("DB connection success");
    console.log("Server Running at port ", MONGO_URL);
    console.log("--------------------------------------------------\n\n\n");
  } else {
    console.log("Db connection fails!");
  }
});





// Managing backend routing 
app.use("/api/v1", router);


module.exports = app;
