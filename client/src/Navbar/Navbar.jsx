import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div className='flex items-center justify-between py-5 px-5 shadow-md'>
      {/* Left Div */}
      <Link to={'/'}> <div className='flex items-center justify-between flex-row font-bold text-3xl text-rose-500'>
        <NavigationIcon fontSize="large"/>
        <h2 className='text-rose-500' >Chat</h2>
      </div>
      </Link>

      {/* Right Div */}
      <div className='flex gap-4'>
       <Link to={'/Login'}>
        <button className='flex items-center  hover:shadow-xl border-gray-500 border rounded-full px-1'>
          <AccountCircleIcon fontSize='large'/> 
          </button>
          </Link>
          <p className='text-black text-2xl font-semibold'>User</p>
      </div>

    </div>
  


            
  )
}

export default Navbar