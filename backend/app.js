const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "mysql-service",
  user: "root",
  password: "password",
  database: "ecommerce"
});

db.connect((err) => {
  if(err){
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.get("/products", (req, res) => {

  db.query("SELECT * FROM products", (err, result) => {

    if(err){
      res.send(err);
    } else {
      res.json(result);
    }

  });

});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
