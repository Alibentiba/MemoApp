import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import * as api from '../api'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUserOnSlice} from '../Redux/Slice'

const Auth = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [SignMode, setSignMode] = useState(false);
    const [User, setUser] = useState({email:'',password:'',confirmPassword:'',firstName:'',LastName:''});
    const dispatch =useDispatch()


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  const SignUp =async()=>{
         let UserData
         if (SignMode) {
          try {
              UserData= await api.Signup(User)
              if(UserData){
                console.log(' user after regisetre',UserData.data.result)
                const res=  await api.Signin(User)
                 await localStorage.setItem('User', JSON.stringify(UserData.data.result))

                if(res){ 
                   navigate('/')
              }}


          } catch (error) {
            console.log('The erroe',error)
          }
          
         } else {
          const res=  await api.Signin(User.email,User.password)
          if(res){ 
            navigate('/')
       }
        }
      }


  return (
<Box  display='flex' alignItems='center' justifyContent='center' width='100%' height='800px'>
    <Stack
     display='flex' 
     alignItems='center'
      justifyContent='flex-start'
       width='30%'
        height='70%'
        bgcolor='white'
        borderRadius='5px'
        paddingTop='20px'
        borderColor='green'
        border='solid 1px' >


 <LockIcon fontSize="large"  />
<Typography variant='h5'> {SignMode? 'Login': 'sing up'}</Typography>

{SignMode &&   
      <Stack 
            display='flex' 
            alignItems='center'
            flexDirection='row'
            justifyContent='center'
            sx={{ m: 1, width: '42ch' }}>
       
       <TextField  id="outlined-multiline-flexible"
          label="firstName"
          multiline
          maxRows={1}
          sx={{ m: 1, width: '20ch' }}
          required
          onChange={(e)=>setUser({...User,firstName:e.target.value})}
        />

         <TextField
          id="outlined-multiline-flexible"
          label="LastName"
          multiline
          maxRows={1}
          sx={{ m: 1, width: '20ch' }}
          required
          onChange={(e)=>setUser({...User,lastName:e.target.value})}

        />
        </Stack>}



         <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={1}
          sx={{ m: 1, width: '40ch' }}
          required
          onChange={(e)=>setUser({...User,email:e.target.value})}

        />


     {/* Password Form*/}
    <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                    
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e)=>setUser({...User,Password:e.target.value})}

          />
        </FormControl>


       

       {SignMode &&   <TextField
          sx={{ m: 1, width: '40ch' }}
          required
          onChange={(e)=>setUser({...User,confirmpassword:e.target.value})}         
          id="outlined-password-input"
          label="confirme Password"
          type="password"
          autoComplete="current-password"
        />}

          <Button 
            onClick={SignUp}
            sx={{ m: 1, width: '30ch' }}
            variant="contained" size="large" > 
            {!SignMode? 'Login': 'sing up'}
         </Button>

         <Button size="small"
            onClick={()=>setSignMode(!SignMode)}
            sx={{ m: 1, width: '40ch',fontWeight:'400' }}> 
            {SignMode? 'Already have an account? Sing In': "Don't have an account? Sing Up "}
         </Button>
    </Stack>
</Box>)
}

export default Auth