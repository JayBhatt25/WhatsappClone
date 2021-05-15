
import { useEffect, useState } from 'react';
import './App.css';
import ChatScreen from './ChatScreen';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'


function App() {
  const [messages, setMessges] = useState([]);

  useEffect(()=> {
    axios.get('/messages/sync').then(response => {
      console.log(response.data);
      setMessges(response.data);
    })
  },[]);

  useEffect(()=> {
    const pusher = new Pusher('b270a904cc54b4bdfd48', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessges([...messages,data]);
    });

    return () => { 
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);

  console.log(messages);
  return (
    <div className="app">
     <div className='app__greenHeader'>

     </div>
     <div className='app__main'>
        <Sidebar />
        <ChatScreen messages = {messages} /> 

     </div>
     
    </div>
  );
}

export default App;
