import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Register({users , setIslogged}) {

  let [registerUser , setRegisterUser] = useState({})

  const handleRegisterChange = function(e) {
    setRegisterUser({...registerUser, [e.target.name] : e.target.value})
    console.log(registerUser);
  }
  const RegisterhandleClick = function(e){
    e.preventDefault();
    if (registerUser.email!== "" && registerUser.password!== "" && registerUser.fullname!== "") {
      console.log("hello user");
      let addUser = users.push(registerUser);
    }
    console.log(users);
  }

 
  
  return (
   <>
   <form style={{display:"flex", flexDirection : "column" , justifyContent : "space-around"}} onClick={(e)=> RegisterhandleClick(e)}>
    <TextField style={{width : "500px", marginRight : "40px", marginBottom : "20px"}} onChange={(e)=>handleRegisterChange(e)} name='email' id="outlined-basic" label="email" variant="outlined" />
    <TextField style={{width : "500px",  marginBottom : "20px" }} id="outlined-basic"  onChange={(e)=>handleRegisterChange(e)} type='password' name='password'label="password" variant="outlined" />
    <TextField style={{width : "500px",  marginBottom : "20px" }} id="outlined-basic"  onChange={(e)=>handleRegisterChange(e)}  type='text' name='fullname'label="fullname" variant="outlined" />

    <Button size='small' variant="contained" disableElevation style={{marginTop : "20px"}}>Log in</Button>
    </form>
   </>
  )
}

export default Register