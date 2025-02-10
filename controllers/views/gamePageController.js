const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
    const response = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`
    );
 
    data = response.data;
    const cover = await endPointGameID("covers", req.params.id);
    data.cover = cover[0] ? cover[0].url : "";
    data.genres = await endPointGameID("genres", req.params.id);
    data.gameModes = await endPointGameID("gamemodes", req.params.id);
    data.Platforms = await endPointGameID("platforms", req.params.id);
    data.Characters = await endPointGameID("characters", req.params.id);
    data.Websites = await endPointGameID("websites", req.params.id);
    data.Screenshots = await endPointGameID("screenshots", req.params.id);
    data.games = await endPointGameID("similar", req.params.id);
 
    for(let game of data.games) {
        const cover = await axios.get(
            `${settings.ROOT}:${settings.PORT}/api/covers`,
        { params: {gameid: game.similar_game_id} }
    );
    game.cover = cover.data[0] ? cover.data[0].url : "";
    }
 
 
    res.render("game", {
        title: "Games!",
        gameData: data,
    });
}
 
async function endPointGameID(endpoint, gameId){
    const values = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
        {
            params: { gameid: gameId },
        }
    );
    return values.data;
 
}
 
module.exports = { renderGamePage };