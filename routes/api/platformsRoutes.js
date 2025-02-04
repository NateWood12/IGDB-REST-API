const express = require("express");
const router = express.Router();
const plaformController = require("../../controllers/api/platformController");

router.get("/", plaformController.getAllPlatforms);
router.get("/:id", plaformController.getPlatformById);

module.exports = router;
