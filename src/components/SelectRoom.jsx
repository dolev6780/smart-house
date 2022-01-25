import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  /////////////hooks//////////
  const [selectRoom, setSelectRoom] = useState('');
/////////////hooks//////////

/////////////functions//////////
  const handleChange = (event) => {
    props.addSelectedRoom(event.target.value);
    setSelectRoom(event.target.value);
    
  };
/////////////functions//////////
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Room</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectRoom}
          onChange={handleChange}
          autoWidth
          label="selectRoom"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"Living Room"}>Living Room</MenuItem>
          <MenuItem value={"BedRoom"}>BedRoom</MenuItem>
          <MenuItem value={"BathRoom"}>BathRoom</MenuItem>
          <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
