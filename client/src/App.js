import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './Login/Login';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import SingUp from './SingUp/SingUp';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';


const App = () => {
  const [currentID, setcurrentID] = useState(null);
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

          </Routes> 
      </div>
      </BrowserRouter>
     
    );  
}

export default App