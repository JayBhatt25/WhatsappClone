import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__headerLeft'>
                    <Avatar>J</Avatar>
                </div>
                <div className='sidebar__headerRight'>
                    <IconButton>
                     <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />                    
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchIcon />
                    <input className='sidebar__input' placeholder='Search or start a new chat.' type='text'></input>
                </div>

            </div>
            <div className='sidebar__chat'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
