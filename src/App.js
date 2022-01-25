import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRoom from './components/AddRoom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  ///////////////hooks/////////////////////////
  const [roomList, setRoomList] = useState(()=>{
    const roomList = localStorage.getItem(("rooms"));
    return roomList ? JSON.parse(roomList) : [];
  })
///////////////hooks/////////////////////////// 
///////////////functions///////////////////////
const addNewRoom = (r, c, s) => {
    setRoomList([
      {room: r, color: c, selected: s},
      ...roomList
      ])   
    }
    localStorage.setItem('rooms', JSON.stringify(roomList));
///////////////functions/////////////////////////

  return (
    <div className="App">
    <Router>
    <NavBar/>
        <Routes>
          <Route path='/' element={<Home roomlist={roomList}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/addrom' element={<AddRoom addNewRoom={addNewRoom}/>}/>
        </Routes>
      </Router> 
    </div>
  );
}
export default App;
