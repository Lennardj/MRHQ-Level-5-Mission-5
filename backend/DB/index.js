const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongodb connected....");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
