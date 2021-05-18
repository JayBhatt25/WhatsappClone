import React, { useState } from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SidebarChat from './SidebarChat';
import axios from './axios'
import { useDataLayerValue } from './Datalayer';

function Sidebar({rooms, messages}) {
    const [roomname, setRoomName] = useState('');
    const [open, setOpen] = useState(false);
    const [{user}] = useDataLayerValue();

    
   

    const handleCreateRoom = async (e) => {
        e.preventDefault();
       await axios.post('/rooms/new', {
            name: roomname,
            messages: [],
        });
        setRoomName('');
        setOpen(false);
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__headerLeft'>
                    <Avatar src={user.photoURL}></Avatar>
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
            <div onClick={e => setOpen(!open)} className='sidebar__createRoom'> 
                <h3>Create a new chat room</h3>
                <IconButton>
                    <AddCircleOutlineIcon />
                </IconButton>
            </div>
            {open ? (
                    <div className='sidebar__createRoomForm'>
                    <form>
                        <input 
                        className='room__input' 
                        placeholder='room name...' 
                        type='text' 
                        value={roomname} 
                        onChange={(e) => setRoomName(e.target.value)}>
                        </input>
                        <button onClick={handleCreateRoom} type='submit'>create</button>
                    </form>
                    
                </div>
            ) : (<> </>)}
            
            <div className='sidebar__chat'>
                {rooms.map(room => (
                    <SidebarChat id = {room._id}name={room.name}  />
                ))}
                
            </div>
        </div>
    )
}

export default Sidebar
