
import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDataLayerValue } from './Datalayer';
import {useHistory} from 'react-router-dom';
import './SidebarChat.css'

function SidebarChat({id, name}) {
    const [roomDetails, setRoomDetails] = useState([]);
    const [room, dispatch] = useDataLayerValue();
    const history = useHistory();
    const [seed, setSeed] = useState('');


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 3000));
    }, [])
    const handleClick = () => {

        history.push(`/room/${id}`);
        setRoomDetails([{
            id: id,
            name: name,


        }]);
        console.log(room);
    }
    return (
        <div onClick={handleClick} className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div  className='sidebarChat__details'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default SidebarChat
