import { Typography,TextField,Button } from "@mui/material";
import React from "react";
import { useState } from "react";
const Form = () =>{
    // const [username,setUserName] = useState("");
    // const [password,setPassword] = useState("");
    const [userdetails,setUserDetails] = useState({
        username:"",
        password:"",
    });
    const handleSubmit = ()=>{
        console.log("username :", userdetails.username);
        console.log("password :", userdetails.password);
    }
return(
    <div className="form-demo">
    <Typography variant="h3">userdetails Here</Typography>
    <TextField  label="UserName" variant="outlined"  value={userdetails.username} onChange={(e)=> setUserDetails( {username : e.target.value})} />
    <TextField  label="Password" variant="outlined" value={userdetails.password} onChange= {(e)=>setUserDetails({password : e.target.value})}/>
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
)
}
export default Form;