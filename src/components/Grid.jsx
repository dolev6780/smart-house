import React, {useState} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../styles/components.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height: "25px",
  width: "100px",
  marginBottom: "10px",
}));

export default function ResponsiveGrid(props) {
  //////////hooks/////////////
  const [onOff,setOnOff]=useState({backgroundColor:"red"})
  const [flag,setFlag]=useState(true)
//////////hooks/////////////
//////////functions/////////////
  const SetOnOff = () =>{
    if(flag) {
    setOnOff({backgroundColor:"green"})
    setFlag(false)
    }
    else{
      setOnOff({backgroundColor:"red"})
      setFlag(true)
    }
  }
//////////functions/////////////
  return (
    <Box className='gridBox' sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} >
          <Button onClick={SetOnOff}><Item style={onOff}>{props.product}</Item></Button>
        </Grid>
    </Grid>
  </Box>
  );
}