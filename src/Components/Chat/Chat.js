import React from 'react';
import './Chat.css';
import {useState} from 'react';

const Chat = () => {
    const [chatLog, setChatLog] = useState("");
    const [input, setInput] = useState("")
    const mainChat = React.createRef();

    const updateText = event => {
        setChatLog(chatLog + input + "\n")
        event.target.value = "";
        scrollToBottom();
        event.preventDefault();
    }

    const scrollToBottom = () => {
        mainChat.current.scrollTop = mainChat.current.scrollHeight;
    }

    return (
        <div>
            <textarea className='mainChat' ref={mainChat} value={chatLog} readOnly={true}></textarea>
            <input className='chatInput' onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => {if (e.keyCode === 13) updateText(e)}}></input>
        </div>
    );
}



export default Chat;