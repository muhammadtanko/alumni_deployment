require("dotenv").config();
require("./src/connection/mongo.conn")();


const userRoutes = require("./src/routes/user.route");
const setRoutes = require("./src/routes/set.route");
const chapterRoutes = require("./src/routes/chapter.route");

const { appPort } = require("./src/config")
const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRoutes());
app.use("/api/v1/set", setRoutes());
app.use("/api/v1/chapter", chapterRoutes());
// test

app.listen(appPort, () => {
    console.log("App listening on port " + appPort);
})