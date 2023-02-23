import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Singup from './Singup/Singup';
import { useDispatch } from 'react-redux';
import { setUserOnSlice } from './Redux/Slice';
import { Profile } from './api';
import Home from './Home/Home';
import Bookings from './Home/Bookings';
import Accommoditions from './Home/Accommoditions';
import NaveHome from './Home/NaveHome';

const App = () => {
 
  // const [User, setUser] = useState(null);
  // const dispatch =useDispatch()
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('User'));
  //   if (items) {
  //   setUser(items);
  //   dispatch(setUserOnSlice(User));
  //   const user =Profile({Token:User?.Token})
  //   console.log('user app ',user)
  //   }
  // }, []);





    return (
      <BrowserRouter >
      < div className='w-full h-[100vh]'>
        <Navbar/>
       <Routes>
        
          <Route  path='/*'  element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='/Singup' element={<Singup/>}/>

       </Routes> 
      
      </div>
      
       

      
       
      </BrowserRouter>
     
    );  
}

export default App