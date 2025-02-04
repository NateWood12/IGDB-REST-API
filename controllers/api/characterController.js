const Character = require("../../models/character");

async function getAllCharacters(req, res) {
    try {
        const { start = 0, limit = 50, gameid } = req.query;
        const characters = await Character.getAllCharacters(
            start,
            limit,
            gameid
        );
        res.status(200).json(characters);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch characters." + err });
    }
}

async function getCharacterById(req, res) {
    try {
        const character = await Character.getCharacterById(req.params.id);
        if (character) {
            res.status(200).json(character);
        } else {
            res.status(404).json({ error: "Game Mode not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch game mode." });
    }
}

module.exports = { getAllCharacters, getCharacterById };
