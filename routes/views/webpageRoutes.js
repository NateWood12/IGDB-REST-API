const express = require("express");
const router = express.Router();
const homeController = require("../../controllers/views/homeController");
const gameController = require("../../controllers/views/gamePageController");

router.get("/", homeController.renderHomePage);
router.get("/game/:id", gameController.renderGamePage);

module.exports = router;
