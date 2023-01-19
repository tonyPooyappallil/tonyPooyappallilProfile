const express = require("express");
const Video = require("../models/videos.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Video.find();
    return res.status(200).send({ data });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Video.create(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Video.findById(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
