require('dotenv').config()

let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//middleware
app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
  let response="Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  } 
  res.json({ message: response });
});

module.exports = app;