import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const NaveHome = () => {
const [Activepage, setActivepage] = useState('Profile');





  return (
   
      
      <div className='flex items-center justify-center  gap-10 font-semibold px-1 py-2 rounded-full'>
        <Link to='/Home/Profile'><button className={`px-5 py-2 rounded-full ${Activepage==='Profile' && 'bg-red-300 text-white' } `} onClick={()=>setActivepage('Profile')}>Profile</button></Link>
        <Link to={'/Home/Bookings'}><button className={`px-5 py-2 rounded-full ${Activepage==='Bookings' && 'bg-red-300 text-white' } `} onClick={()=>setActivepage('Bookings')}>Bookings</button></Link>
        <Link to='/Home/Accommoditions'><button  className={`px-5 py-2 rounded-full ${Activepage==='Accommoditions' && 'bg-red-300 text-white' } `} onClick={()=>setActivepage('Accommoditions')}>Accommoditions</button></Link>
      </div>

  )
}

export default NaveHome
