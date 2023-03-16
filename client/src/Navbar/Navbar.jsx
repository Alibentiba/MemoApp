import React, { useEffect, useState } from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../actions/Users';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
const Navbar = () => {
  const [User, setUser] = useState(null);
  const user =useSelector(state=>state.users)
  const dispatch =useDispatch()

  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem('profile')))
  }, [user]);

  const handelLogout=()=>{
    localStorage.removeItem('profile');
    dispatch(Logout())
}

  return (
    <div className='flex items-center justify-between py-5 px-5 shadow-md'>
      {/* Left Div */}
      <Link to={'/'}> <div className='flex items-center justify-between flex-row font-bold text-3xl text-rose-500'>
        <FilterCenterFocusIcon fontSize="large"/>
        <h2 className='text-blue-500' >Memories</h2>
      </div>
      </Link>




{/* Right Div */}

      {User? 
     <div className='flex gap-8  items-center justify-center font-semibold'>
        <p>{User?.result?.name}</p>
        <p className='flex items-center border-none text-white text-2xl  bg-violet-300 w-14 h-14 justify-center  hover:shadow-xl border-gray-500 border rounded-full px-1'>{User?.result?.name.charAt(0)}</p> 
        <button onClick={handelLogout} className='text-white border-none   flex items-center rounded-sm bg-rose-500 w-20 h-8 justify-center  hover:shadow-xl border-gray-500 border  px-1'>
            LogOut
        </button>
      </div> :

     <div className='flex gap-4  items-center justify-center'>
      <NoAccountsIcon sx={{ fontSize: 40 }}/>
       <Link to={'/Login'}>
      <button className=' text-white flex items-center  border-none rounded-sm bg-rose-500 w-20 h-8 justify-center  hover:shadow-xl border-gray-500 border  px-1'>
          Login
      </button>
        </Link>
      </div>

      }

      

    </div>
  


            
  )
}

export default Navbar