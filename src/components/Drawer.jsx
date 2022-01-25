import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuDrawer() {
  ////////////hooks////////////////
  const [state, setState] = useState({left: false});
  const [username, setUsername] = useState(()=>{
    const username = localStorage.getItem(("user-name"));
    return username ? JSON.parse(username) : '';
})
////////////hooks////////////////
let navigate = useNavigate();//navigator
////////////functions////////////
  const deleteUser = () =>{
    localStorage.removeItem("user-name")
  }
  const home = () =>{
    navigate('/')
  }
  const login = () =>{
    navigate('/login')
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text:'Home',icon:<HomeIcon/>,click:home}, 
         {text:'Login',icon:<LoginIcon/>,click:login}, 
         {text:'Logout',icon:<LogoutIcon/>,click:deleteUser}].map((item, i) => (
          <Button onClick={item.click} key={i}>
          <ListItem button key={i}>     
          <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          </Button>
        ))}
      </List>  
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor,i) => (
        <React.Fragment key={i}>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <h1 style={{textAlign:"center"}}>Hello {username}</h1>
            <Divider />
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
