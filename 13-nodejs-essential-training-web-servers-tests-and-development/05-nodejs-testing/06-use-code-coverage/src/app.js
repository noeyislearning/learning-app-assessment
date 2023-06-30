const express = require("express");
const bodyParser = require("body-parser");
const { logger } = require("./lib");
const dictionaryRoutes = require("./dictionary-routes");

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use(express.static("./client"));

app.use("/dictionary", dictionaryRoutes);

module.exports = app;