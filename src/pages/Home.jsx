import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Popup from '../components/Popup'
import '../styles/pages.css'

export default function Home(props) {
    return (
        <div>
            <div>
           <Link style={{textDecoration:"none"}} to={'/addrom'}><Button id='addroombtn'>add room</Button></Link>
           </div>
           <br />
           <div className='cardsContainer'>
           {props.roomlist.map((p, i) => {
            return <Popup key={i} room={p.room} color={p.color} selected={p.selected}/>
            })}
           </div>
        </div>
    )
}
