
import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { useDataLayerValue } from './Datalayer';
import { actionTypes } from './reducer';
import {useHistory} from 'react-router-dom';
import './SidebarChat.css'

function SidebarChat({id, name, messages}) {
    const [roomDetails, setRoomDetails] = useState([]);
    const [room, dispatch] = useDataLayerValue();
    const history = useHistory();

    const handleClick = () => {

        history.push(`/room/${id}`);
        setRoomDetails([{
            id: id,
            name: name,
            messages: messages,

        }]);

        dispatch({
            roomId: id,
            roomName: name,
            messages: messages,
        });
        console.log(room);
    }
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div onClick={handleClick} className='sidebarChat__details'>
                <h2>{name}</h2>
                <p>This is the latest message.</p>
            </div>
        </div>
    )
}

export default SidebarChat
