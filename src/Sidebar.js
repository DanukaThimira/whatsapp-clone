import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon  from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Avatar, IconButton, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => (
      setRooms(snapshot.docs.map((doc) => 
        ({
            id: doc.id,
            data: doc.data(),
        })
        ))
    ));
    return () => {
      unsubscribe()
    }
  }, []);
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar src={user?.photoURL}/>
            <div className='sidebar_headerRight'>
              <IconButton>{/* to make icon clickable */}
              <DonutLargeIcon />
              </IconButton>
               <IconButton><ChatIcon /></IconButton>
               <IconButton><MoreVertIcon /></IconButton>
                
                
            </div>
        </div>
        <div className='sidebar_search'>
          <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input placeholder='search to start new chat' type='text'/>
          </div>
          
        </div>
        <div className='sidebar_chat'>
          <SidebarChat addNewChat />
          {rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))}  
        </div>
    </div>
  )
}

export default Sidebar