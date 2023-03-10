import { Button, Checkbox, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RgisterUser } from '../actions/Users';

const Singup = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [conditionsGeneral, setconditionsGeneral] = useState(false);
  const [registerUser, setregisterUser] = useState(null);
  const dispatch =useDispatch()


const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  

const handelRegister=(e)=>{
  e.preventDefault()
  setregisterUser({name,email,password})
  dispatch(RgisterUser({name,email,password}))
  console.log('object From SingUp',{name,email,password})
}



    return (
        <div className='flex flex-col items-center mt-10 justify-start w-screen h-screen ' >
          <p className='font-bold text-3xl mb-16'>Singup</p>
          
          <form  className='flex flex-col w-1/3 h-3/4 items-center justify-center border py-6  shadow-xl ' onSubmit={handelRegister}>
          <TextField
              label="UserName"
              size="laSmallrge"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ m: 1, width: '40ch','& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{ height:'55px'}}}
            />
          <TextField
              label="Email"
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
                value={ConfirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />

        <div className='flex items-center justify-center '>
        <Checkbox onClick={()=>setconditionsGeneral(!conditionsGeneral)}
               
                 checked={conditionsGeneral}
                 sx={{ '& .MuiSvgIcon-root': { fontSize: 26} }}/>
                <p>j'accepte les conditions générales</p>
        </div>

               <button onClick={handelRegister} className='text-white px-8 py-2 rounded-sm w-1/2 font-semibold bg-rose-500' disabled={!conditionsGeneral}>Register</button>
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
