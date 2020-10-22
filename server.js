const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const waitList = [];

const reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.json(reservations);
  res.json(waitList);
});

app.get("/reserve", function(req, res) {
  console.log("This is where the reservation form will go.")
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
