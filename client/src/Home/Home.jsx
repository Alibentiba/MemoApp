import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Bookings from './Bookings'
import Places from '../Places/Places'
import NaveHome from './NaveHome'
import AddPlace from '../Places/AddPlace'
const Home = () => {
  return (
    <div className='h-screen '>
    <NaveHome/>
   
       <Routes>
        <Route path='/Home/Profile'  element={<Profile/>}/>
        <Route path='/Home/Bookings' exact element={<Bookings/>}/>
        <Route path='/Home/Accommoditions' element={<Places/>}/>
        <Route path='/Home/Accommoditions/New' element={<AddPlace/>}/>

        </Routes>
   
 


</div>
  

)
   
}

export default Home
