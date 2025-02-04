const Screenshot = require("../../models/screenshot");

async function getAllScreenshots(req, res) {
    try {
        const { start = 0, limit = 50, gameid } = req.query;
        const screenshots = await Screenshot.getAllScreenshots(
            start,
            limit,
            gameid
        );
        res.status(200).json(screenshots);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch screenshots." });
    }
}

async function getScreenshotById(req, res) {
    try {
        const platform = await Screenshot.getScreenshotById(req.params.id);
        if (platform) {
            res.status(200).json(platform);
        } else {
            res.status(404).json({ error: "Screenshot not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch game." });
    }
}

module.exports = { getAllScreenshots, getScreenshotById };
