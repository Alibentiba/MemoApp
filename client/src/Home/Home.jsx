import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Bookings from './Bookings'
import Accommoditions from './Accommoditions'
import NaveHome from './NaveHome'
const Home = () => {
  return (
    <div className='bg-blue-400 h-screen'>
    <NaveHome/>
   
       <Routes>
        <Route path='/Home/Profile'  element={<Profile/>}/>
        <Route path='/Home/Bookings' exact element={<Bookings/>}/>
        <Route path='/Home/Accommoditions' element={<Accommoditions/>}/>
        </Routes>
   
 


</div>
  

)
   
}

export default Home
