import React from 'react'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Auth from './Auth/Auth';
// } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import { Box } from '@mui/material';

const App = () => {
    return (
      <BrowserRouter>
        <Box width='100%' padding='0px'>
        <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/Auth" element={<Auth/>} />
       </Routes> 

        </Box>
       
      </BrowserRouter>
     
    );  
}

export default App