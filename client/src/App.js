import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from './Auth/Auth';
// } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import { Box } from '@mui/material';
import PostDetails from './PostDetails/PostDetails';
// import Paginations from './Posts/Paginations';

const App = () => {
    return (
      <BrowserRouter>
        <Box width='100%' padding='0px'>
        <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/posts" element={<Home/>} />

           <Route path="/Auth" element={<Auth/>} />
           <Route path="/post/:id" element={<PostDetails/>} />

       </Routes> 

        </Box>
       
      </BrowserRouter>
     
    );  
}

export default App