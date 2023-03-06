import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {deletePost,setUpdatePost} from '../actions/posts'

const Post = ({_id,creator,title,message,tags,selectedFile,likCount,createdAt}) => {
    const dispatch =useDispatch()
   
    const post ={_id,creator,title,message,tags,selectedFile,likCount,createdAt}



  return (
    <div className='w-64 bg-white h-96 m-2 rounded-lg flex flex-col justify-between  ' >
        <div className='flex items-start justify-between px-1'>
            <span><p className='font-semibold text-xl'>{creator}</p>
               <p className=' text-md text-gray-600'>{moment(createdAt).fromNow()}</p></span>
            <IconButton color="black" onClick={()=>{dispatch(setUpdatePost(post))}} >
               <MoreVertIcon />
            </IconButton>
        </div>
    
        <img className='w-full mx-0 h-48 '
            src={selectedFile}
            alt="image place" />

        <div className='flex flex-col px-1'>
            <p className='text-gray-500 text-lg'>{tags}</p>
            <p className='font-semibold text-xl px-6'>{message.substring(0,30)}</p>
        </div>

        <div className='flex items-start justify-between px-1'>
            <IconButton color="primary" >
                <ThumbUpIcon /> <p className='text-sm text-gray-500'>{likCount}</p>
            </IconButton>
            <IconButton onClick={()=>{dispatch(deletePost(_id))}} color="error" variant="outlined" >
                <DeleteIcon />
            </IconButton>   
        </div>

    </div>
  )
}

export default Post
