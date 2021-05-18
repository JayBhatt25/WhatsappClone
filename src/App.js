
import { useEffect, useState } from 'react';
import './App.css';
import ChatScreen from './ChatScreen';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'
import { Route,BrowserRouter as  Router, Switch, useParams } from 'react-router-dom';
import Login from './Login';
import { useDataLayerValue } from './Datalayer';


function App() {
  const [messages, setMessges] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useDataLayerValue();

  
  
  
  useEffect(() => {
    axios.get('rooms/sync').then(res => {
      setRooms(res.data);

    });
  }, [rooms])

 



  useEffect(()=> {
    axios.get('/messages/sync').then(response => {
      
      setMessges(response.data);
    });

   
  },[rooms]);

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

  ;
  return (
    

        <div className="app">
          {!user ? (
           <div className='app__signInContainer'> 
              <Login />
           </div>
            
            
          ) : (
            <Router>
            <Switch>
              <Route path='/room/:id'>
                    <div className='app__greenHeader'>

                     </div>
                    <div className='app__main'>
                        <Sidebar rooms={rooms} />
                        <ChatScreen messages = {messages} /> 

                    </div>
              </Route>
             <Route path='/'>
                <div className='app__greenHeader'>

                </div>
                <div className='app__main'>
                    <Sidebar rooms={rooms} messages = {messages} />
                    <ChatScreen messages = {messages} /> 

                </div>
              </Route>
            </Switch>
    
    
          </Router>

          )}
           
        </div>

        
    
  );
}

export default App;
