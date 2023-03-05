import { Button, Checkbox, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Singup = () => {
    const [email, setemail] = useState('');
const [password, setpassword] = useState('');

const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

    return (
        <div className='flex flex-col items-center mt-10 justify-start w-screen h-screen ' >
          <p className='font-bold text-3xl mb-16'>Singup</p>
          
          <form  className='flex flex-col w-1/3 h-3/4 items-center justify-center border py-6  shadow-xl '>
          <TextField
              label="UserName"
              id="outlined-size-small"
              size="laSmallrge"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              sx={{ m: 1, width: '40ch','& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{ height:'55px'}}}
            />
          <TextField
              label="Email"
              id="outlined-size-small"
              size="laSmallrge"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              sx={{ m: 1, width: '40ch','& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{ height:'55px'}}}
            />
             <FormControl sx={{ m: 1, width: '40ch'}}
               variant="outlined"
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               >
                
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
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"/>
            </FormControl>

            <TextField
                id="outlined-password-input"
                label="Confirme Password"
                type="password"
                autoComplete="current-password"
                sx={{ m: 1, width: '40ch'}}
                />

        <div className='flex items-center justify-center '>
        <Checkbox
                 unchecked
                sx={{ '& .MuiSvgIcon-root': { fontSize: 26} }}/>
                <p>j'accepte les conditions générales</p>
        </div>

               <button  className='text-white px-8 py-2 rounded-sm w-1/2 font-semibold bg-rose-500'>Register</button>
                <p className='text-sm mt-3 text-gray-600'>
                already have an account 
                 <Link to='/Login' className='font-semibold ml-2 text-blue-800'>
                      Login
                 </Link>

                </p>

          </form>
       
        </div>
      )
}

export default Singup
