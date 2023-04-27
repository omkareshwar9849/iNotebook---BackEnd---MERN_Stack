const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017"
mongoose.set("strictQuery", false);

async function connecToMongo() {
    await mongoose.connect(mongoURL);
    console.log("successfully connected to mongodb");
  }

module.exports = connecToMongo;