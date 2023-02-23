import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
 const user=useSelector(state=>state.Store.User)
 console.log('The User after the login',user)

  return (
    <div className='flex items-center justify-between py-5 px-5 shadow-md'>
      {/* Left Div */}
      <Link to={'/'}> <div className='flex items-center justify-between flex-row font-bold text-3xl text-rose-500'>
        <NavigationIcon fontSize="large"/>
        <h2 className='text-rose-500' >airbnb</h2>
      </div>
      </Link>

     {/* Center div */}

      <div className='flex border border-stone-300 gap-4 font-semibold px-1 py-2 rounded-full'>
        <button className='border-r-2 border-r-gray-300 px-2 '>N'importe où</button>
        <button className='border-r-2 border-r-gray-300 px-2 '>Une semiane</button>
        <div className='text-gray-400 flex items-center'>
             <p className='mr-1'>Ajouter des vouageurs </p>
            <IconButton size='small' aria-label="add to shopping cart" sx={{bgcolor:'red'}}>
                <SearchIcon sx={{color:'white'}}/>
          </IconButton>
      </div>

      </div>

      {/* Right Div */}
      <div className='flex gap-4'>

        <button className='font-semibold rounded-full p-2 hover:bg-gray-100'>Mettre mon logement sur Airbnb</button>
        <button className='font-semibold rounded-full p-2 hover:bg-gray-100'><LanguageIcon/></button>
       <Link to={'Login'}> <button className='flex items-center  hover:shadow-xl border-gray-500 border rounded-full px-1'>
          <MenuIcon/> 
          <AccountCircleIcon fontSize='large'/> 
          </button>
          </Link>
          <p className='text-black text-2xl font-semibold'>{user?.result?.name}</p>
      </div>

    </div>
  


            
  )
}

export default Navbar