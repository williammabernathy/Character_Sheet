import React from "react";
import "./Chat.css";
import { useState } from "react";
import ChatMessage from "./Components/ChatMessage";

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [input, setInput] = useState("");

  const updateText = (event) => {
    setChatLog([...chatLog, input]);
    event.target.value = "";
    event.preventDefault();
  };

  return (
    <div className="chat">
      <div className="chatContainer">
        {chatLog.map((chatMessage) => (
          <ChatMessage message={chatMessage} />
        ))}
      </div>
      <input
        className="chatInput"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) updateText(e);
        }}
      ></input>
    </div>
  );
};

export default Chat;
