const db = require("../config/db");

async function getAllGames(start = 0, limit = 50, like) {
    let where = "";
    let params = [];
    if (like) {
        where = " where name like concat('%',?,'%')";
        params.push(like);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(
        `Select * from games ${where} limit ?,?`,
        params
    );
    return rows;
}

async function getGameById(gameId) {
    const [rows] = await db.execute("Select * from games WHERE game_id = ?", [
        gameId,
    ]);
    return rows[0];
}

module.exports = { getAllGames, getGameById };
