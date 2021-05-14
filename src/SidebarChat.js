
import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat__details'>
                <h2>Room name</h2>
                <p>This is the latest message.</p>
            </div>
        </div>
    )
}

export default SidebarChat
