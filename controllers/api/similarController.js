const Similar = require("../../models/similar");

async function getAllSimilarGames(req, res) {
    try {
        const { start = 0, limit = 50, gameid } = req.query;
        const similar = await Similar.getAllSimilarGames(start, limit, gameid);
        res.status(200).json(similar);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch similar." + err });
    }
}

async function getSimilarByGameId(req, res) {
    try {
        const similar = await Similar.getSimilarByGameId(req.params.id);
        if (similar) {
            res.status(200).json(similar);
        } else {
            res.status(404).json({ error: "similar not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch similar." + err });
    }
}

module.exports = { getAllSimilarGames, getSimilarByGameId };
