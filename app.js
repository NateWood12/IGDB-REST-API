//MVC Architecture
//Model - View - Controller
//Model - Represents the data and business logic (interactions with a database)
//Controller - Handles logic for processing requests and orchestrating flow
//View - is responsible for formatting the output - For this REST api, that will be json.
const path = require("path");
const settings = require("./config/settings");
const express = require("express");
const app = express();

const gameRoutes = require("./routes/api/gameRoutes");
const platformRoutes = require("./routes/api/platformsRoutes");
const screenshotRoutes = require("./routes/api/screenshotsRoutes");
const gameModeRoutes = require("./routes/api/gamemodeRoutes");
const genreRoutes = require("./routes/api/genreRoutes");
const characterRoutes = require("./routes/api/characterRoutes");
const websitesRoutes = require("./routes/api/websitesRoutes");
const similarRoutes = require("./routes/api/similarRoutes");
const coverRoutes = require("./routes/api/coverRoutes");
//const platformsRoutes = require("./routes/platformsRoutes")

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/gamemodes", gameModeRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/websites", websitesRoutes);
app.use("/api/similar", similarRoutes);
app.use("/api/covers", coverRoutes);
//app.use('/api/platforms', platformsRoutes);

const homeRoute = require("./routes/views/webpageRoutes");
app.use("/", homeRoute);
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(settings.PORT, () => {
    console.log(`Server is running on port ${settings.PORT}`);
    console.log(`Try going to ${settings.ROOT}:${settings.PORT}/api/games`);
});
