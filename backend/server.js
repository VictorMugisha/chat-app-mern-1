const express = require("express");
const chats = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000
const app = express();

app.get("/api/chat", (req, res) => {
  res.status(200).json(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const id  = req.params.id;
    const singleChat = chats.find(chat => chat._id === id);
    res.send(singleChat)
});

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`.yellow.bold);
});
