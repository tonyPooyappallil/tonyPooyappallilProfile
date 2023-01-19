const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    videoLink: { type: String, required: false },
    coverImgLink: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

const Video = mongoose.model("video", videoSchema);

module.exports = Video;
