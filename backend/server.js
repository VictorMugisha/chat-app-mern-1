const express = require("express");
const chats = require("./data/data.js");

const app = express();

app.get("/api/chat", (req, res) => {
  res.status(200).json(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const id  = req.params.id;
    const singleChat = chats.find(chat => chat._id === id);
    res.send(singleChat)
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
