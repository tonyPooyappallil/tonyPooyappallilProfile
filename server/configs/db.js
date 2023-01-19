const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://tonyPooyappallil:tonyPooyappallil@cluster0.bqayn.mongodb.net/tonyArtProfile?authSource=admin&replicaSet=atlas-l5muk0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
