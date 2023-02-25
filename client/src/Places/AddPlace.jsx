import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Checkbox, TextField } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import RadioIcon from '@mui/icons-material/Radio';
import ForestIcon from '@mui/icons-material/Forest';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
const AddPlace = () => {
  return (
    <div className='flex flex-col items-start justify-center w-1/2 shadow-xl rounded-md mt-10  ml-[25%] border-gray-500 border gap-3 px-2 py-4'>
      <TextField 
      id="outlined-basic" 
      label="Title" 
      variant="outlined"
      sx={{width:'500px'}}
      />
      <TextField 
      sx={{width:'500px'}}
      id="outlined-basic" 
      label="Address"
      variant="outlined" />


      <p className='font-semibold flex items-center justify-start'>Photos:</p>
      <div className='flex   items-start justify-center gap-6'>
        <TextField 
        id="outlined-basic" 
        label="Add Photo" 
        variant="outlined" 
        sx={{width:'500px'}}
        />
        <button className=' bg-orange-500  px-6 py-4 rounded-md font-semibold text-white'>Add Photo</button>

      </div>

      <div className='grid grid-cols-3'>
        <button 
            className='border w-32 font-semibold flex gap-2 items-center justify-center border-black bg-white h-20 text-center text-gray-600  rounded-md'>
             <CloudUploadIcon />Upload
          </button>

      </div>


      <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          sx={{width:'500px'}}

        />

      <p className='font-semibold flex items-center justify-start'>Perks:</p>

        <div className='grid grid-cols-4 gap-x-6 gap-y-6'>
          <label htmlFor="" className='flex items-center justify-center shadow-xl px-3 py-2'>
            <Checkbox  color="default" />
             <WifiIcon/>  
             <span className='font-semibold text-xl ml-1'>Wifi</span>
             </label>

             <label htmlFor="" className='flex items-center justify-center shadow-xl px-3 py-2'>
            <Checkbox  color="default" />
             <CarRepairIcon/>  
             <span className='font-semibold text-xl ml-1'>Parking</span>
             </label> 
             
             
             <label htmlFor="" className='flex items-center justify-center shadow-xl px-3 py-2'>
            <Checkbox  color="default" />
             <RadioIcon/>  
             <span className='font-semibold text-xl ml-1'>Radio</span>
             </label>

              <label htmlFor="" className='flex items-center justify-center shadow-xl px-3 py-2'>
            <Checkbox  color="default" />
             <ForestIcon/>  
             <span className='font-semibold text-xl ml-1'>Forest</span>
             </label> 
             
             
             
             <label htmlFor="" className='flex items-center justify-center shadow-xl px-3 py-2'>
            <Checkbox  color="default" />
             <SportsKabaddiIcon/>  
             <span className='font-semibold text-xl ml-1'>Sport</span>
             </label> 
             
          
      
        </div>
      

    </div>
  )
}

export default AddPlace
