const db = require("../config/db");

async function getAllWebsites(start = 0, limit = 50, gameid) {
    let condition = ``;
    if (gameid) {
        condition = db.format(` where game_id = ? `, [gameid]);
    }
    const [rows] = await db.execute(
        `Select * from websites ${condition} Limit ?,?`,
        [
            start.toString(), //tostring for workaround of mysql 8.4 bug
            limit.toString(),
        ]
    );
    return rows;
}

async function getWebsiteById(websiteId) {
    const [rows] = await db.execute(
        "Select * from websites WHERE website_id = ?",
        [websiteId]
    );
    return rows[0];
}

module.exports = { getAllWebsites, getWebsiteById };
