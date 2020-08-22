import React, { Fragment } from "react";
import "./ChatMessage.css";

const ChatMessage = (props) => {
    const {user, message} = props.message;
    const color = (props.index % 2 === 0) ? 'transparent' : 'black';

  return (
    <Fragment>
      {message[0] !== '/' && <div className="message" style={{backgroundColor: color, color: "#f8f8ff"}}>{user}: {message}</div>}
    </Fragment>
  );
};

export default ChatMessage;
