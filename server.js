const express = require("express");
const email = require("./routes/email");
const path = require("path");
const app = express ();
require("dotenv").config();
const cors = require("cors");


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use("/api/email", email);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});