const db = require("../config/db");

async function getAllCharacters(start = 0, limit = 50, gameid) {
    let condition = ``;
    let join = "";
    if (gameid) {
        condition = db.format(` where gc.game_id = ? `, [gameid]);
        join = `inner join game_characters gc on gc.characters_id = c.character_id`;
    }
    const [rows] = await db.execute(
        `Select c.* from characters c ${join} ${condition} Limit ?,?`,
        [
            start.toString(), //tostring for workaround of mysql 8.4 bug
            limit.toString(),
        ]
    );
    return rows;
}

async function getCharacterById(characterId) {
    const [rows] = await db.execute(
        "Select * from characters WHERE character_id = ?",
        [characterId]
    );
    return rows[0];
}

module.exports = { getAllCharacters, getCharacterById };
