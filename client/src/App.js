import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './Login/Login';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import SingUp from './SingUp/SingUp';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import PostDetails from './PostDetails/PostDetails';


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPosts())
    
    },[dispatch]);

    return (
      <BrowserRouter >
      < div className='w-full h-[100vh]'>
          <Navbar/>
          <Routes>
              <Route  path='/'  element={<Home/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/SingUp' element={<SingUp/>}/>
              <Route path='/post/:id' element={<PostDetails/>}/>

          </Routes> 
      </div>
      </BrowserRouter>
     
    );  
}

export default App