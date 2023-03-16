import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import Post from '../Post/Post';


const Home = () => {

  const postsList =useSelector(state=>state.posts.posts)

  return (
    <div className='w-full  h-full flex flex-row p-4 gap-3'>
      <div className='w-3/4  grid grid-cols-4'>
        {postsList?.map(({_id,title,message,tags,selectedFile,createdAt})=>{
            return <div key={_id}>
              <Post 
                _id={_id}
                title={title} 
                message={message} 
                tags={tags} 
                selectedFile={selectedFile}
                createdAt={createdAt}
              />
            </div>
          })
        }
     
      </div>
      <Form/>
    </div>
  )
}

export default Home
