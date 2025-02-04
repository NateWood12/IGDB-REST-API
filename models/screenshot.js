const db = require("../config/db");

async function getAllScreenshots(start = 0, limit = 50, gameid) {
    let condition = ``;
    if (gameid) {
        condition = db.format(` where game_id = ? `, [gameid]);
    }
    const [rows] = await db.execute(
        `Select * from screenshots ${condition} Limit ?,?`,
        [
            start.toString(), //tostring for workaround of mysql 8.4 bug
            limit.toString(),
        ]
    );
    return rows;
}

async function getScreenshotById(screenshotId) {
    const [rows] = await db.execute(
        "Select * from screenshots WHERE screenshot_id = ?",
        [screenshotId]
    );
    return rows[0];
}

module.exports = { getAllScreenshots, getScreenshotById };
