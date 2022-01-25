import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  //////////hooks/////////////
  const [selectProduct, setSelectProduct] = useState('');
  const [disableBoiler, setDisableBoiler] = useState({display:""})
  const [disableStereo, setDisableStereo] = useState({display:""})
  //////////hooks/////////////

  //////////functions/////////////
  const handleChange = (event) => {
    props.addSelectProduct(event.target.value);
    setSelectProduct(event.target.value);
  };

  const setLimitSelectors = () =>{
  if(props.selected != "BathRoom"){
    setDisableBoiler({display:"none"})
  }
  if(props.stereoCounter){
    setDisableStereo({display:"none"})
  }
}
//////////functions/////////////
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Product</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectProduct}
          onChange={handleChange}
          autoWidth
          label="SelectProduct"
          onOpen={setLimitSelectors}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"Air conditioner"}>Air conditioner</MenuItem>
          <MenuItem style={disableStereo} value={"Stereo"}>Stereo</MenuItem>
          <MenuItem value={"Lamp"}>Lamp</MenuItem>
          <MenuItem style={disableBoiler} value={"Boiler"}>Boiler</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
