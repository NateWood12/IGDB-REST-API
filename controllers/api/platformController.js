const Platform = require("../../models/platform");

async function getAllPlatforms(req, res) {
    try {
        const { start = 0, limit = 50 } = req.query; //game?start=50&limit=30
        const platforms = await Platform.getAllPlatforms(start, limit);
        res.status(200).json(platforms);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch platforms." });
    }
}

async function getPlatformById(req, res) {
    try {
        const platform = await Platform.getPlatformById(req.params.id);
        if (platform) {
            res.status(200).json(platform);
        } else {
            res.status(404).json({ error: "Platform not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch game." });
    }
}

module.exports = { getAllPlatforms, getPlatformById };
