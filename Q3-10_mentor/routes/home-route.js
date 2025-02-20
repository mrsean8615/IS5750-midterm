const express = require("express");
const router = express.Router();

// controllers
const homeController = require("../controllers/home-controller");

router.get("/", homeController.getHome);

router.get("/about", homeController.getAbout);

module.exports = router;
