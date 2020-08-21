import React, { createRef } from "react";
import "./Chat.css";
import { useState } from "react";
import { useEffect } from "react";
import ChatMessage from "./Components/ChatMessage";

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = React.createRef();

  const updateText = (event) => {
    setChatLog([...chatLog, input]);
    event.target.value = "";
    event.preventDefault();
  };

  const scrollToBottom = (ref) => {
    ref.current.scrollTop = ref.current.scrollHeight;
  };

  useEffect(() => scrollToBottom(chatContainerRef), [chatContainerRef])

  return (
    <div className="chat">
      <div className="chatContainer" ref={chatContainerRef}>
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
