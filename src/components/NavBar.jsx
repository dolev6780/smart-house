import * as React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from './Drawer'
import '../styles/components.css'

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Drawer username={props.username}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{textDecoration:"none"}}>
          <Button id='titlebtn'>Smart House</Button>
          </Link>
          </Typography>
          <Link to="/login" style={{textDecoration:"none"}}>
          <Button style={{color:"white"}}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}