const express = require("express");

const connect = require("./configs/db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const videosController = require("./controllers/videos.controller");

app.use("/videos", videosController);
app.get("/api", (req, res) => res.send("Its working!"));
app.listen(process.env.port || 4000, function () {
  connect();
  console.log("now listening for requests");
});
