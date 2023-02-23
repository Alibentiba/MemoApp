
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link } from 'react-router-dom';
import  {Signup} from   '../api/index.js'

const Singup = () => {
const [name, setname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [Rspons, setRspons] = useState(null);

const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const rigster = async(e) => {
    e.preventDefault()
      const respons=await Signup({ name ,email,password})
      setRspons(respons.data)
      console.log('The respons after register',respons)
  };



  return (
    <div className='flex flex-col items-center mt-10 justify-start w-screen h-screen'>
      <p className='font-bold text-3xl mb-16'>Sing Up</p>
      <p className='text-black'>{Rspons?.message}</p>
      <form onSubmit={rigster} className='flex flex-col w-1/3 h-1/2 items-center justify-center border  shadow-xl '>
      <TextField
          label="Email"
          id="outlined-size-small"
          size="laSmallrge"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          sx={{ m: 1, width: '40ch','& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{ height:'55px'}}}
        />

         <TextField
          label="username"
          id="outlined-size-small"
          defaultValue="Small"
          size="laSmallrge"
          value={name}
          onChange={(e) => setname(e.target.value)}
          sx={{ m: 1, width: '40ch','& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{ height:'55px'}}}
          />

           
         <FormControl sx={{ m: 1, width: '40ch'}}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
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
               Singup
            </button>
            <p className='text-sm mt-3 text-gray-600'> Already member 
              <Link to="/Login" className='font-semibold ml-2 text-blue-800'>
                 Login
               </Link>
              </p>

      </form>
   
    </div>
  )
}

export default Singup
