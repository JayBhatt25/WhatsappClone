
import './App.css';
import ChatScreen from './ChatScreen';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
     <div className='app__greenHeader'>

     </div>
     <div className='app__main'>
        <Sidebar />
        <ChatScreen /> 

     </div>
     
    </div>
  );
}

export default App;
