
import './App.css'
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
   
    <div className="app">
      {!user ? (
      <Login />
      ) :
      (
      <div className='app_body'>
        <BrowserRouter>
        <Sidebar />
        <Routes>
        <Route path='/room/:roomId' element={<Chat />} />
        <Route path='/' element={<Chat />} />
        </Routes>
        </BrowserRouter>
      </div>
    )}
      
    </div>
  );
}

export default App;
