import React from "react";
import "./Chat.css";
import { useState } from "react";
import { useEffect } from "react";
import ChatMessage from "./Components/ChatMessage";

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("Zach");
  const chatContainerRef = React.createRef();

  const addChatMessage = (event) => {
    setChatLog([...chatLog, {user, message: input}]);
    event.target.value = "";
    event.preventDefault();
  };

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => scrollToBottom())

  return (
    <div className="chat">
      <div className="chatContainer" ref={chatContainerRef}>
        {chatLog.map((chatMessage, index) => (
          <ChatMessage message={chatMessage} index={index} key={index}/>
        ))}
      </div>
      <input
        className="chatInput"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) addChatMessage(e);
        }}
      ></input>
    </div>
  );
};

export default Chat;
