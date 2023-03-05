import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { creatPost } from '../actions/posts';

const Form = () => {
    const [postData, setpostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:null});
   const dispatch =useDispatch()


const handlSubmit=()=>{
dispatch(creatPost(postData))
}
const Clear=()=>{
    setpostData({creator:''
    ,title:'',
    message:'',
    tags:'',
    selectedFile:null})
}




  return (
    <div className='w-1/4 h-3/4 rounded-lg p-3  border border-gray-500 '>
        <h3 className='w-full text-center font-bold text-xl py-5'>Creat Post</h3>
        <form onSubmit={handlSubmit} className=' w-full h-full items-center justify-start flex flex-col gap-3'>
            <TextField
                    label="Creator"
                    id="outlined-size-small"
                    size="laSmallrge"
                    value={postData.creator}
                    onChange={(e) => setpostData({...postData,creator:e.target.value})}
                    fullWidth
                    />   
                <TextField
                    label="Title"
                    id="outlined-size-small"
                    size="laSmallrge"
                    value={postData.title}
                    onChange={(e) => setpostData({...postData,title:e.target.value})}
                    fullWidth
                    /> 
                <TextField
                    label="Message"
                    id="outlined-size-small"
                    size="laSmallrge"
                    value={postData.message}
                    onChange={(e) => setpostData({...postData,message:e.target.value})}
                    fullWidth
                />
                <TextField
                    label="Tags"
                    id="outlined-size-small"
                    size="laSmallrge"
                    value={postData.tags}
                    onChange={(e) => setpostData({...postData,tags:e.target.value})}
                    fullWidth
                />

                <div className='w-full'>
                <FileBase
                    
                    type="file"
                    multiple={false}
                        onDone={({base64 })=>setpostData({...postData,selectedFile:base64})  }
                         />  
                    </div>
                    
                <Button onClick={handlSubmit} variant="contained" size="large" fullWidth>
                            Submit
                </Button> 

                <Button onClick={Clear}  variant="outlined" color="error" size="large" fullWidth>
                            Clear
                </Button> 
         </form>
                    
         {postData?.selectedFile && <img src={postData?.selectedFile} alt='fd' className='w-20 h-20'/>}
        
         </div>
  )
}

export default Form
