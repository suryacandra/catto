const express = require("express");
const path = require("path");
const upload = require("express-fileupload");
const cors = require("cors");

const client = require("./lib/connectDB");
const indexRoute = require("./routes/index");
const uploadRoute = require("./routes/api/upload");
const getOneImageRoute = require("./routes/api/getOneImage");
const getRandomImageRoute = require("./routes/api/getRandomImage");
const getAllRoute = require("./routes/api/getAll");
const notFoundRoute = require("./routes/404");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload());

app.set("view engine", "ejs");
app.set("views", "views");
console.log(__dirname);
app.use(express.static(__dirname + "/public"));

client.connect()

app.use(indexRoute);

app.use(uploadRoute);

app.use(getOneImageRoute);

app.use(getRandomImageRoute);

app.use(getAllRoute);

app.use(notFoundRoute);

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
