const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const waitList = [];

const reservations = [];

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/api/tables", function (req, res) {
    res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitList);
});

app.post("/api/tables", function (req, res) {
    if (reservations.length < 5) {
        reservations.push(req.body);
        res.end(true);
    } else {
        waitList.push(req.body);
        res.end(false);
    };
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
