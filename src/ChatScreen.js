import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChatScreen.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ChatScreen() {
    return (
        <div className='chatScreen'>
            <div className='chatScreen__header'>
                <div className='chatScreen__headerLeft'>
                    <Avatar />
                    <p>Jay</p>
                </div>
                <div className='chatScreen__headerRight'>
                    <SearchIcon />
                    <MoreVertIcon />

                </div>
            </div>
        </div>
    )
}

export default ChatScreen
