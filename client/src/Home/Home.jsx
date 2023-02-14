import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import {getAllPosts} from '../Redux/Slice'
import * as api from '../api'
import { Box } from '@mui/material'

const Home = () => {
    const dispatch =useDispatch()
  const allPosts =useSelector(state=>state.Store.allPosts)

  // thesoe To var for telling the app w are do some action then refresh 
  const DataUpddate =useSelector(state=>state.Store.Dataupddate)

  //fetching the data from DB
  useEffect(() => {
    const getallposts=async()=>{
      try {
        const {data}=await api.fetchPosts();
        console.log('data',data)
        dispatch(getAllPosts(data))

      } catch (error) {
        console.log('The erroe',error)
      }
    }
    getallposts();
 
  },[DataUpddate]);
  return (
    <Box flexDirection='row' display='flex' padding="15px">
        <Posts/>
        <Form/>
    </Box>
  )
}

export default Home