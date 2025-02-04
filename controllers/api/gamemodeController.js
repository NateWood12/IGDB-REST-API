const GameMode = require("../../models/gamemode");

async function getAllGameModes(req, res) {
    try {
        const { start = 0, limit = 50, gameid } = req.query;
        const gamemodes = await GameMode.getAllGameModes(start, limit, gameid);
        res.status(200).json(gamemodes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch gamemodes." + err });
    }
}

async function getGameModeById(req, res) {
    try {
        const game_mode = await GameMode.getGameModeById(req.params.id);
        if (game_mode) {
            res.status(200).json(game_mode);
        } else {
            res.status(404).json({ error: "Game Mode not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch game mode." });
    }
}

module.exports = { getAllGameModes, getGameModeById };
