const db = require("../config/db");

async function getAllGenres(start = 0, limit = 50, gameid) {
    let condition = ``;
    let join = ``;
    if (gameid) {
        condition = db.format(` where gg.game_id = ? `, [gameid]);
        join = `inner join game_genre gg on gg.genre_id = ge.genre_id `;
    }
    const [rows] = await db.execute(
        `Select ge.* from genres ge ${join} ${condition} Limit ?,?`,
        [
            start.toString(), //tostring for workaround of mysql 8.4 bug
            limit.toString(),
        ]
    );
    return rows;
}

async function getGenreById(genreId) {
    const [rows] = await db.execute("Select * from genres WHERE genre_id = ?", [
        genreId,
    ]);
    return rows[0];
}

module.exports = { getAllGenres, getGenreById };
