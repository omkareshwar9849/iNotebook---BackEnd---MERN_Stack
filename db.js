const mongoose = require('mongoose');

const mongoURL = "mongodb://0.0.0.0:27017"
mongoose.set("strictQuery", false);

async function connecToMongo() {
    await mongoose.connect(mongoURL);
    console.log("successfully connected to mongodb");
  }

module.exports = connecToMongo;