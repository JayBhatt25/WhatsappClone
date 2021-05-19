import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './ChatScreen.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AlternateEmail, AttachFile, InsertEmoticon, Mic, Send } from '@material-ui/icons';
import axios from './axios'
import { useDataLayerValue } from './Datalayer';
import { useParams } from 'react-router';

function ChatScreen({messages}) {
    const [{user}, dispatch] = useDataLayerValue();
    const [input, setInput] = useState("");
    const [rminfo, setRmInfo] = useState([]);
    const roomId = useParams();
  const idinStr = String(roomId.id);
  const toget = `/room/${idinStr}`;
    const date = new Date();
  useEffect(() => {
       
        axios.get(toget).then(response => {
        setRmInfo(response.data);
        })
      
        console.log(rminfo);
 
    },[toget])
   
    
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new',{
            message: input,
            name: user ? user.displayName : "Set user",
            timestamp: date.toLocaleString(),
            roomid: roomId.id,
            received: user ? true : false,

        });
        setInput('');
    };


    return (
        <div className='chatScreen'>
            <div className='chatScreen__header'>
                <div className='chatScreen__headerLeft'>
                    <Avatar />
                    <div className='chatScreen__headerLeftDetails'>
                        <h3>{rminfo ? rminfo.name : "General"}</h3>
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
            <div className='chatScreen__body' id='chatBody'>
                {messages.map(message => (
                    (message.roomid === roomId.id ? (
                        <p className= {`chat__message ${user.displayName === message.name && message.received && 'chat__receiver'} `}>
                     <span className='chat__name'>{message.name}</span>
                     {message.message}
                     <span className='chat__timestamp'>{message.timestamp}</span>
                     </p>
                    ): (<> </>))
                     
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
