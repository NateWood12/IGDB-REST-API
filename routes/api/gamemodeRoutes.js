const express = require("express");
const router = express.Router();
const gameModeController = require("../../controllers/api/gamemodeController");

router.get("/", gameModeController.getAllGameModes);
router.get("/:id", gameModeController.getGameModeById);

module.exports = router;
