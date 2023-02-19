import React, { useState } from 'react'
import { Avatar, Box, Button, Typography } from '@mui/material'
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom'
import {Stack } from '@mui/system'
import {deepPurple } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { updateData,setUserOnSlice } from '../Redux/Slice'


const Navbar = () => {
  const UserFromSlice= useSelector(state=>state.Store.User)
  const dataStauts =useSelector(state=>state.Store.Dataupddate)
  const dispatch =useDispatch()
  const navigate = useNavigate();


  const LogOut =()=>{
    if (UserFromSlice) {
      localStorage.removeItem('User');
      dispatch(updateData(!dataStauts))
      dispatch(setUserOnSlice(null))



    }else{navigate('/Auth')
  }}

  return (
    <Box
     width="100%"
      height='60px'
       bgcolor='black'
        color='black'
         display='flex' 
         alignItems='center' >
        <Link to='/Auth'>Hello</Link>

        <Stack display='flex' flexDirection='row' gap='40px'>
        <Avatar sx={{ bgcolor: deepPurple[500] }}
                alt="Remy Sharp">
                  OP
                  </Avatar>

       <Button variant="contained" onClick={LogOut}>
        {!UserFromSlice? 'Login': 'Log Out'}
        </Button >
            <Typography color='white'>
              {UserFromSlice?.name}
            </Typography>
        </Stack>


                </Box>
  )
}

export default Navbar