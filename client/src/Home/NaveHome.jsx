import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import DeckIcon from '@mui/icons-material/Deck';
const NaveHome = () => {
const [Activepage, setActivepage] = useState('Profile');
  return (
   
      
      <div className='flex items-center justify-center  gap-10 font-semibold px-1 py-2 rounded-full'>
        <Link to='/Home/Profile'>
          <button className={`px-5 py-2  rounded-full inline-flex gap-1 ${Activepage==='Profile' ? 'bg-red-300 text-white' :'bg-gray-300' } `} onClick={()=>setActivepage('Profile')}>
           <PersonIcon/> Profile
             </button>
            </Link>
        <Link to={'/Home/Bookings'}>
          <button className={`px-5 py-2 rounded-full inline-flex gap-1 ${Activepage==='Bookings' ? 'bg-red-300 text-white' :'bg-gray-300' } `} onClick={()=>setActivepage('Bookings')}>
          <ListIcon/>  Bookings
            </button>
            </Link>
        <Link to='/Home/Accommoditions'>
          <button  className={`px-5 py-2 rounded-full inline-flex gap-1 ${Activepage==='Accommoditions' ? 'bg-red-300 text-white' :'bg-gray-300' } `} onClick={()=>setActivepage('Accommoditions')}>
           <DeckIcon/> Accommoditions
            </button>
            </Link>
      </div>

  )
}

export default NaveHome
