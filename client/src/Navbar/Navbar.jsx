import React, { useState } from 'react'
import { Avatar, Box, Button } from '@mui/material'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { bgcolor, Stack } from '@mui/system'
import { deepOrange, deepPurple } from '@mui/material/colors';


const Navbar = () => {
  const [user, setuser] = useState(false);
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
                alt="Remy Sharp"
                src="https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F6b471e7c-75bd-416c-9fd1-be3a4f7ce352.2Ejpeg/2048x1536/quality/80/denzel-washington.jpeg"

        >OP</Avatar>
       <Button variant="contained" onClick={()=>setuser(!user)}>
        {user? 'Login': 'sing up'}


        </Button >
          
        </Stack>


                </Box>
  )
}

export default Navbar