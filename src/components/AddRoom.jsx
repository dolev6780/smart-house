import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import validateColor from "validate-color";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectRoom from './SelectRoom'

export default function AddRoom(props) {
    /////hooks/////////
    const [roomName, setRoomName] = useState('')
    const [roomColor, setRoomColor] = useState('')
    const [roomSelected, setRoomSelected] = useState('')
    /////hooks/////////
    let navigate = useNavigate();//navigator
    /////functions/////////
    const addSelectedRoom = (SelectedRoom) => setRoomSelected(SelectedRoom)
    const addRoom = () =>{
        if(roomName.length >= 1 && roomName.length <=5 && validateColor(roomColor)){
            props.addNewRoom(roomName,roomColor,roomSelected)
            alert("Room created")
            navigate("/");
        }
        else{
            alert("Room cannot be created, wrond inputs")
            navigate("/");
        }
    }
    /////functions/////////
    return (
        <div id='addRoomdform'>
            <SelectRoom addSelectedRoom={addSelectedRoom} />
            <TextField label="Room Name" onChange={(e)=>setRoomName(e.target.value)} type="text"/><br/><br/>
            <TextField label="Room Color" onChange={(e)=>setRoomColor(e.target.value)} type="text"/><br/><br/>
            <Button variant="contained" onClick={addRoom} >Add Room</Button><br/><br/><br/>
        </div>
    )
}