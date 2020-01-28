var express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// // connection configurations
// const mc = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "intranet"
// });

// // connect to database
// mc.connect();

// enable cors
app.use(cors({ origin: "*" }));

// listen for requests  ||  change port.
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server Lisening On Port : " + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing route
var routes = require("./app/routes/approutes");
// register the route
routes(app);
