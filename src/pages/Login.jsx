import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Login() {
   ////////////hooks////////////////////
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
   //////////hooks//////////////////////
    let navigate = useNavigate();//goto to other page by navigate 
   //////functions/////////////////////
    const login = () =>{
        if(name.length >= 2 && email.includes("@")){
            localStorage.setItem('user-name', JSON.stringify(name));
            alert("Welcome To Smart House")
            navigate("/");
        }
        else{
            alert("not valid")
        } 
    }
   /////functions/////////////////////

    return (
        <div>
            <h1>Enter Name and Email</h1>
            <TextField  label="Name" onChange={(e)=>setName(e.target.value)} type="text"/><br/><br/>
            <TextField  label="Email" onChange={(e)=>setEmail(e.target.value)} type="text"/><br/><br/>
            <Button variant="contained" onClick={login}>Login</Button><br/><br/><br/>
        </div>
    )
}