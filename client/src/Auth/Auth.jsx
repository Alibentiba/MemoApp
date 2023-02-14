import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setuser] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
<Box display='flex' alignItems='center' justifyContent='center' width='100%' height='800px'>
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
<Typography variant='h5'> {user? 'Login': 'sing up'}</Typography>


{user &&   
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
        />

         <TextField
          id="outlined-multiline-flexible"
          label="LastName"
          multiline
          maxRows={1}
          sx={{ m: 1, width: '20ch' }}
          required
        />
        </Stack>}



         <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={1}
          sx={{ m: 1, width: '40ch' }}
          required
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
          />
        </FormControl>


       

       {user && <TextField
          id="outlined-multiline-flexible"
          label="Confirm pasword"
          multiline
          maxRows={1}
          sx={{ m: 1, width: '40ch' }}
          required
        />}
          <Button 
            onClick={()=>setuser(!user)}
            sx={{ m: 1, width: '30ch' }}
            variant="contained" size="large" > 
            {user? 'Login': 'sing up'}
         </Button>

         <Button size="small"

            onClick={()=>setuser(!user)}
            sx={{ m: 1, width: '40ch',fontWeight:'400' }}
            // variant="contained" 
             > 
            {user? 'Already have an account? Sing In': "Don't have an account? Sing Up "}
         </Button>
             







        
    </Stack>




</Box>  )
}

export default Auth