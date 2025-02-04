const db = require("../config/db");

async function getAllGameModes(start = 0, limit = 50, gameid) {
    let condition = ``;
    let join = "";
    if (gameid) {
        condition = db.format(` where ggm.game_id = ? `, [gameid]);
        join = `inner join game_game_mode ggm on ggm.game_mode_id = gm.game_mode_id`;
    }
    const [rows] = await db.execute(
        `Select gm.* from game_modes gm ${join} ${condition} Limit ?,?`,
        [
            start.toString(), //tostring for workaround of mysql 8.4 bug
            limit.toString(),
        ]
    );
    return rows;
}

async function getGameModeById(gameModeId) {
    const [rows] = await db.execute(
        "Select * from game_modes WHERE game_mode_id = ?",
        [gameModeId]
    );
    return rows[0];
}

module.exports = { getAllGameModes, getGameModeById };
