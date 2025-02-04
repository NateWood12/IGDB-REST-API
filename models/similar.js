const db = require("../config/db");

async function getAllSimilarGames(start = 0, limit = 50, gameid) {
    let condition = ``;
    if (gameid) {
        condition = db.format(` where g.game_id = ? `, [gameid]);
    }
    const [rows] = await db.execute(
        `Select g.*, g2.game_id similar_game_id, g2.name similar_game_name, 
        g2.category similar_game_category, g2.summary similar_game_summary from games g 
        inner join game_similar gs on gs.game_id = g.game_id
        inner join games g2 on g2.game_id = gs.similar_game_id 
        ${condition} Limit ?,?`,
        [
            start.toString(), //tostring for workaround of mysql 8.4 bug
            limit.toString(),
        ]
    );
    return rows;
}

async function getSimilarByGameId(gameId) {
    const [rows] = await db.execute(
        `Select g.* from games g
        inner join game_similar gs on gs.similar_game_id = g.game_id
        WHERE gs.game_id = ?`,
        [gameId]
    );
    return rows;
}

module.exports = { getAllSimilarGames, getSimilarByGameId };
