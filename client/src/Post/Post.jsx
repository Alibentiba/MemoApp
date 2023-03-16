import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {deletePost,Like,setUpdatePost, setPostDetails} from '../actions/posts'
import { useNavigate } from "react-router-dom";

const Post = ({_id,title,message,tags,selectedFile,likes,createdAt}) => {

    const dispatch =useDispatch()
    const navigate = useNavigate();

    const post ={_id,title,message,tags,selectedFile,likes,createdAt}
    const handlPostDetails=(e)=>{
        e.preventDefault()
        dispatch(setPostDetails(post))
        navigate(`/post/${_id}`);


    }




  return (
    <div className='w-64 bg-white h-96 m-2 rounded-lg flex flex-col justify-between border border-gray-300 ' >
        <div onClick={handlPostDetails}   style={{backgroundImage: `url(${selectedFile})`}}
        className={`flex items-start justify-between px-1 h-64 bg-cover bg-center text-white`}>
            <span>
                <p className=' text-md '>{moment(createdAt).fromNow()}</p></span>
               
        </div>
    

        <div className='flex flex-col px-1'>
            <p className='text-gray-500 text-lg'>{tags}</p>
            <p className='font-semibold text-xl px-6'>{message?.substring(0,30)}</p>
        </div>

        <div className='flex items-start justify-between px-1'>
           <IconButton  onClick={()=>{dispatch(setUpdatePost(post))}} >
                  <MoreVertIcon />
                </IconButton>

            <IconButton onClick={()=>{dispatch(deletePost(_id))}} color="error" variant="outlined" >
                <DeleteIcon />
            </IconButton>   
        </div>

    </div>
  )
}

export default Post
