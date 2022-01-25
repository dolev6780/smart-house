import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../styles/components.css'

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 100 }} variant="outlined" className="card" style={{backgroundColor: props.color}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
        {props.room}
        </Typography>
        <Typography sx={{ fontSize: 12 }} variant="h5" component="div">
        {props.selected}
        </Typography>
      </CardContent>
    </Card>
  );
}