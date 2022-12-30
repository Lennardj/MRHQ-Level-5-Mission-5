const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./db");
require("dotenv").config();
const port = process.env.PORT;

const laptopRouter = require("../backend/routes/laptop-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", laptopRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
