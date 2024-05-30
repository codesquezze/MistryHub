const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Connection to the database failed:", error);
  }
};

module.exports = connectDB;
