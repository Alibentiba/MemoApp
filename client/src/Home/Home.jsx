import React from 'react'
import { useSelector } from 'react-redux';
import Form from '../Form/Form';


const Home = () => {
  const posts =useSelector(state=>state.posts)
  console.log('The posts from Redux',posts)
  return (
    <div className='w-full  h-full flex flex-row p-4 gap-3'>
      <div className='w-3/4 bg-green-400'>
        <p>posts</p>
      </div>
      <Form/>
    </div>
  )
}

export default Home
