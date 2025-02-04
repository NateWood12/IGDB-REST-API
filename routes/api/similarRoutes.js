const express = require("express");
const router = express.Router();
const similarController = require("../../controllers/api/similarController");

router.get("/", similarController.getAllSimilarGames);
router.get("/:id", similarController.getSimilarByGameId);

module.exports = router;
