import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  async function fetchChats() {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setChats(data);
  }

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <p key={chat.chatName}>{chat.chatName}</p>
      ))}
    </div>
  );
}
