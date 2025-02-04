const db = require("../config/db");

async function getAllPlatforms(start = 0, limit = 50) {
    const [rows] = await db.execute("Select * from platforms Limit ?,?", [
        start.toString(), //tostring for workaround of mysql 8.4 bug
        limit.toString(),
    ]);
    return rows;
}

async function getPlatformById(platformId) {
    const [rows] = await db.execute(
        "Select * from platforms WHERE platform_id = ?",
        [platformId]
    );
    return rows[0];
}

module.exports = { getAllPlatforms, getPlatformById };
