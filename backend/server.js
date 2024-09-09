const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
