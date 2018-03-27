const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");
const bodyParser = require("body-parser");
const logger = require("morgan");
const compression = require("compression");

const app = express();
const DIST_DIR = path.join(__dirname, "build");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const APP_PORT = process.env.PORT || 7700;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(compression());

app.use(logger("dev"));

app.use(history());
app.set("port", APP_PORT);
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => res.sendFile(HTML_FILE));

app.listen(app.get("port"));
console.log(`Listening at http://localhost:${APP_PORT}`);
