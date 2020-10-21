const express = require("express");

const app = express();
const PORT = 8080;

const waitList = [];

const reservations = [];

app.get("/", function(req, res) {
  res.send("This is where the home page will go!");
});

app.get("/tables", function(req, res) {
  res.json(reservations);
  res.json(waitList);
  console.log("This is where the lists will go.")
});

app.get("/reserve", function(req, res) {
  console.log("This is where the reservation form will go.")
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});