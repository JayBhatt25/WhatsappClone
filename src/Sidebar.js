import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__headerLeft'>
                    <Avatar>J</Avatar>
                </div>
                <div className='sidebar__headerRight'>
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
