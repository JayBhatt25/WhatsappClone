import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './ChatScreen.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, InsertEmoticon, Mic, Send } from '@material-ui/icons';

function ChatScreen() {
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

                <p className='chat__message'>
                    <span className='chat__name'>Jay</span>
                    This is a message.
                    <span className='chat__timestamp'>{new Date().toLocaleString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Jay</span>
                    This is a message.
                    <span className='chat__timestamp'>{new Date().toLocaleString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Jay</span>
                    This is a message.
                    <span className='chat__timestamp'>{new Date().toLocaleString()}</span>
                </p>

            </div>
            <div className='chatScreen__footer'>
                <div className='footer__left'>
                    <InsertEmoticon />
                    <AttachFile />
                </div>
                
                <div className='footer__center'>
                    <form>
                        <input className='chat__input' type='text' placeholder='Type a message...'></input>
                        <button type='submit'></button>
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
