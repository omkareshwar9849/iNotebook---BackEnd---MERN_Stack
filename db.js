const mongoose = require('mongoose');

// const mongoURL = "mongodb://0.0.0.0:27017/inotebook"
const mongoURL = "mongodb+srv://omkar:omkar@cluster0.2eqx9us.mongodb.net/inotebook"
mongoose.set("strictQuery", false);

async function connecToMongo() {
    await mongoose.connect(mongoURL);
    console.log("successfully connected to mongodb");
  }

module.exports = connecToMongo;