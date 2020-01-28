"user strict";

var mysql = require("mysql");

// connect to a local mysql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "intranet"
});

connection.connect(function(err) {
  if(err) throw err;
  else console.log("MYSQL Connected");
});

module.exports = connection;
