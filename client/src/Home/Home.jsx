import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import Post from '../Post/Post';


const Home = () => {

  const posts =useSelector(state=>state.posts)
  const postsup =useSelector(state=>state.postToupdate)

  console.log('object,',posts)
  console.log('postToupdate,',postsup)

  return (
    <div className='w-full  h-full flex flex-row p-4 gap-3'>
      <div className='w-3/4 bg-green-400 grid grid-cols-4'>
        {
          posts?.map(({_id,creator,title,message,tags,selectedFile,likCount,createdAt})=>{
            return <div key={_id}>
              <Post 
                _id={_id}
                creator={creator} 
                title={title} 
                message={message} 
                tags={tags} 
                selectedFile={selectedFile}
                likCount={likCount}
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
