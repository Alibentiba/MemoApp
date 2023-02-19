import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import {getAllPosts,setUserOnSlice} from '../Redux/Slice'
import * as api from '../api'
import { Box, Paper } from '@mui/material'
import Paginations from '../Posts/Paginations'

const Home = () => {
    const dispatch =useDispatch()
  // const allPosts =useSelector(state=>state.Store.allPosts)


  // thesoe To var for telling the app w are do some action then refresh 
  const DataUpddate =useSelector(state=>state.Store.Dataupddate)

  //fetching the data from DB
  useEffect(() => {
    const getallposts=async()=>{
      try {
        const {data}=await api.fetchPosts();
        dispatch(getAllPosts(data))
      } catch (error) {
        console.log('The erroe',error)
      }
    }
    getallposts();



    // Handel User
    // const getUserFromLocalStorage= async()=>{
    //   let User = await JSON.parse(localStorage.getItem('User'));
    //   if(User){
    //     console.log('the user from localStorege',User)

    //     await api.Signin({User})
    //     dispatch(setUserOnSlice(User))
    //   }}
    //     getUserFromLocalStorage()



  },[DataUpddate]);





  return (
    <Box flexDirection='row' display='flex' padding="15px">
        {/* <Posts/> */}
        <Form/>
        <Paper elevation={6}>
        <Paginations/>




        </Paper>
    </Box>
  )
}

export default Home