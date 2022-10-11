import React,{useState} from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import { countries } from "./countries";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"

const DropDownComponent=()=>{
   let navigate=useNavigate();
    const [countryValue,setCountryValue]=useState(null)
    const handleChange=(e)=>{
        e.preventDefault()
  setCountryValue(e.target.value)
    }
    const handleClick=()=>{
        if(countryValue)
     navigate(`/country/${countryValue}`,{state:{name:`${countryValue}`}})
    }
return <>
<Box sx={{minWidth: 160}}>
    <h3 style={{fontFamily :"cursive" , color: "green"}}>View Flag</h3>
    <FormControl sx={{ m: 1, minWidth: 150 }} >
        <InputLabel id="error">Select Country</InputLabel>
        <Select labelId="error" onChange={handleChange} label="Select Country">
      {countries.map(item=>{
        return <MenuItem value={item.name}>{item.name}</MenuItem>
      })}
        </Select>
        {countryValue?"":<label style={{color:"red"}}>Select Country</label>}
  <br/><br/>
 
    <Button onClick={handleClick} variant="contained">Submit</Button>
    </FormControl>
   
    </Box>
    </>

}
export default DropDownComponent;