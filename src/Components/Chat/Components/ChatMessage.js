import React from 'react';
import "./ChatMessage.css";

const ChatMessage = (props) => {
    return (
        <div className="message">
            {props.message}
        </div>
    )
}

export default ChatMessage;