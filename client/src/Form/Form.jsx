import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import * as api from '../api'
import {Box, Button, TextField, Typography } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import {updatePost,updateData} from '../Redux/Slice'

const Form = () => {
    const [postData, setpostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:'',likCount:0})
    const PostToupdate =useSelector(state=>state.Store.postToupdate)
    const dataStauts =useSelector(state=>state.Store.Dataupddate)
    const dispatch =useDispatch()

    useEffect(() => {
      if(PostToupdate){setpostData(PostToupdate)}
    }, [PostToupdate]);



    const ClearpostData=()=>{
      setpostData({creator:'',title:'',message:'',tags:'',selectedFile:'',likCount:0})
      dispatch(updatePost(null))

    }

  

    const CreatNewPost=async()=>{
        try {
          if(PostToupdate==null){
            await api.creatPost(postData)
           
          }else{
            await api.updatePost(PostToupdate._id,postData)
           
          }
  
        } catch (error) {
          console.log('The erroe',error)
        }
        ClearpostData()
        dispatch(updateData(!dataStauts))

      }


  return (
<Box
 flexDirection="column" display='flex' width="30%" gap='35px' padding='20px' border='solid 1px gray' borderRadius='5px'>
  <Typography
  fontWeight='500'
  fontSize='28px'
  display='flex'
  justifyItems='center'
  alignItems='center'
  justifyContent='center'
  >{!PostToupdate? 'creat a':'Editing That'}  Memorise</Typography>
<TextField
          id="outlined-multiline-flexible"
          label="Creator"
          multiline
          maxRows={4}
          value={postData.creator}
          onChange={(e)=>setpostData({...postData,creator:e.target.value})}
                  />
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={5}
          value={postData.title}
          onChange={(e)=>setpostData({...postData,title:e.target.value})}
                  />
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={3}
          value={postData.message}
          onChange={(e)=>setpostData({...postData,message:e.target.value})}
                  />
         <TextField
          id="outlined-multiline-flexible"
          label="Tags"
          multiline
          maxRows={3}
          value={postData.tags}
          onChange={(e)=>setpostData({...postData,tags:e.target.value})}
                  />
       
        
        {postData.selectedFile && <img src={postData.selectedFile} />}
        
        <FileBase64
        type='file'
        multiple={false}
        onDone={ ({base64})=>setpostData({...postData,selectedFile:base64})} />
        
              <Button variant="outlined" onClick={CreatNewPost}>{PostToupdate? ('update'):('creat')}</Button>
              <Button variant="outlined" color="error" onClick={ClearpostData}>Clear</Button>
        </Box>
          )
}

export default Form