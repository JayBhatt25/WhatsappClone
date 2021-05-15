import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatScreen.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, InsertEmoticon, Mic, Send } from '@material-ui/icons';
import axios from './axios'

function ChatScreen({messages}) {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new',{
            message: input,
            name: "Set user",
            timestamp: "Just now",
            received: false.valueOf,

        });
        setInput('');
    };
    return (
        <div className='chatScreen'>
            <div className='chatScreen__header'>
                <div className='chatScreen__headerLeft'>
                    <Avatar />
                    <div className='chatScreen__headerLeftDetails'>
                        <h3>Room name</h3>
                        <p>Last seen today at 21:09</p>
                    </div>
                </div>
                <div className='chatScreen__headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='chatScreen__body'>
                {messages.map(message => (
                     <p className= {`chat__message ${message.received && 'chat__receiver'} `}>
                     <span className='chat__name'>{message.name}</span>
                     {message.message}
                     <span className='chat__timestamp'>{message.timestamp}</span>
                     </p>
                ))}
               
            </div>
            <div className='chatScreen__footer'>
                <div className='footer__left'>
                    <InsertEmoticon />
                    <AttachFile />
                </div>
                
                <div className='footer__center'>
                    <form>
                        <input  value={input} onChange={e => setInput(e.target.value)} className='chat__input' type='text' placeholder='Type a message...'></input>
                        <button onClick={sendMessage} type='submit'></button>
                    </form>
                </div>
                <div className='footer__right'>
                 <Mic />
                </div>
            </div>
        </div>
    )
}

export default ChatScreen
