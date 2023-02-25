import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, Route, Routes } from 'react-router-dom';
import AddPlace from './AddPlace';
const Places = () => {
  return (
   
    <div className='flex  items-center justify-center  gap-10 font-semibold px-1 py-2 rounded-full'>
    <Link to='/Home/Accommoditions/New'>
      <button className='px-8 py-2  rounded-full inline-flex gap-1  bg-rose-600 text-white '>
       <AddIcon/> Place
         </button>
        </Link>
         
        </div>
  )
}

export default Places
