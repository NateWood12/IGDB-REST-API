const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
    const response = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`,
        {
            params: req.query,
        }
    );
    data = response.data;

    res.render("game", {
        title: "Games!",
        gameData: data, 
    });
}
module.exports = { renderGamePage };
