const express = require("express");
const router = express.Router();
const websiteController = require("../../controllers/api/websiteController");

router.get("/", websiteController.getAllWebsites);
router.get("/:id", websiteController.getWebsiteById);

module.exports = router;
