import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Card from './Card'
import SelectProduct from './SelectProduct'
import Grid from './Grid'
import Divider from '@mui/material/Divider';
import '../styles/components.css'

export default function AlertDialog(props) {
  ////////////hooks//////////////
  const [selectedProduct, setSelectedProduct] = useState('')
  const [productList, setProductList] = useState([])
  const [displayAddProduct, setDisplayAddProduct] = useState({display:""})
  const [stereoCounter, setStereoCounter] = useState(0)
  const [open, setOpen] = useState(false);
  ////////////hooks//////////////
  ////////////functions//////////////
  const addSelectProduct = (selectedProduct) => {
    setSelectedProduct(selectedProduct)
  }
  const addproductList = () =>{
    setProductList([
      selectedProduct,
      ...productList
    ])
    setLimits()
  }
  const setLimits = () =>{
    if(productList.length>=4){
      setDisplayAddProduct({display:"none"})
    }
    if(selectedProduct == "Stereo"){
      setStereoCounter(1)
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
////////////functions//////////////
  return (
    <div >
      <Button style={{color:props.color}} onClick={handleClickOpen}>
        <Card room={props.room} color={props.color} selected={props.selected}/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle style={{textAlign:"center"}} id="alert-dialog-title" >
        <Typography className='popup-title'>SMART HOUSE</Typography>
        </DialogTitle>
        <DialogContent >
        <Typography sx={{ fontSize: 18 }} gutterBottom>
           Room Name: {props.room}
        </Typography>
        <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
        <h3>Room Type: {props.selected}</h3>
        </Typography>
        <Divider/>
        <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
        {productList.map(function(p, i){
         return (<Grid key={i} product={p}/>)
       })}
        </Typography>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <Divider/>
        <DialogActions style={displayAddProduct}>
        <SelectProduct stereoCounter={stereoCounter} selected={props.selected} addSelectProduct={addSelectProduct} />
          <Button id='addproductbtn' onClick={addproductList}>Add Smart Product</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}