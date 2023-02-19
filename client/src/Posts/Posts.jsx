import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid} from '@mui/material';
import Post from '../Post/Post';
import './Posts.css'

  
const Posts = () => {
 const Posts =useSelector(state=>state.Store.allPosts)

  return (
    <Box container justifyContent="center"   spacing='20' sx={{ width: '70%' }} >

    {!Posts.length? <Box><CircularProgress/></Box>:

    <Grid container justifyContent="center" spacing='20'>
      { Posts?.map(({_id,creator,title,message,tags,createdAt,selectedFile,likCount})=>   
        <Grid key={_id} item >
        <Post
          key={_id}
          title={title}
          creator={creator}
          message={message}
          tags={tags}
          selectedFile={selectedFile}
          createdAt={createdAt}
          _id={_id}
          likCount={likCount}/>
        </Grid>)}
      </Grid>
      
  }
  
  </Box>
  )
  }

export default Posts