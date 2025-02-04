const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
    let data = { game_id: req.params.id };
    res.render("game", {
        title: "Games!",
        gameData: data,
    });
}
module.exports = { renderGamePage };
