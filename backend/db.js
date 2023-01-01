const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/mern_test_1_inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Mongodb is connected successfully!");
  });
};

module.exports = connectToMongo;
