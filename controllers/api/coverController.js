const Cover = require("../../models/cover");

async function getAllCovers(req, res) {
    try {
        const { start = 0, limit = 50, gameid } = req.query;
        const cover = await Cover.getAllCovers(start, limit, gameid);
        res.status(200).json(cover);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch cover." });
    }
}

async function getCoverById(req, res) {
    try {
        const cover = await Cover.getCoverById(req.params.id);
        if (cover) {
            res.status(200).json(cover);
        } else {
            res.status(404).json({ error: "cover not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch cover." });
    }
}

module.exports = { getAllCovers, getCoverById };
