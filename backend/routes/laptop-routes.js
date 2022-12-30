const express = require("express");

const LaptopCtrl = require("../controllers/laptop-ctrl");

const router = express.Router();

router.get("/laptop", LaptopCtrl.getLaptop);

module.exports = router;
