const express = require("express");
const router = express.Router();
const genreController = require("../../controllers/api/genreController");

router.get("/", genreController.getAllGenres);
router.get("/:id", genreController.getGenreById);

module.exports = router;
