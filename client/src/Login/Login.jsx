import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };






  return (
    <div className='flex flex-col items-center mt-10 justify-start w-screen h-screen'>
      <p className='font-bold text-3xl mb-16'>Login</p>
      <form className='flex flex-col w-1/3 h-1/2 items-center justify-center border  shadow-xl '>
      <TextField
          label="username"
          id="outlined-size-small"
          defaultValue="Small"
          size="laSmallrge"
          sx={{ m: 1, width: '40ch',
          '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{ height:'55px'}
        }}/>

           
         <FormControl sx={{ m: 1, width: '40ch'}}
           variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
                 endAdornment={
                 <InputAdornment 
                  position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
           <button className='text-white px-8 py-2 rounded-sm w-1/2 font-semibold bg-rose-500'>
               Login
            </button>



      </form>
   
    </div>
  )
}

export default Login
