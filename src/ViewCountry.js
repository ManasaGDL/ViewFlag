import React from "react"
import { useNavigate , useLocation} from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect,useState } from "react";
import {countries} from "./countries"
const ViewCountry=()=>{
  
    let location=useLocation();
    let navigate=useNavigate();
    let match= countries.filter(item=>{
        return item.name===location.state.name
    })
    

    return <><h1 style={{fontFamily:'monospace'}}>Welcome To {location.state.name}</h1>
    <img src={match[0].img} alt={match[0].name}/>
    <br/>
    <Button onClick={()=>navigate(-1)}>HOME</Button>
    </>
}
export default ViewCountry;