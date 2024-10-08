const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: , ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(`MongoDB connection failed! , ${error.message}`.red.bold);
    process.exit();
  }
}

module.exports = connectDB;
