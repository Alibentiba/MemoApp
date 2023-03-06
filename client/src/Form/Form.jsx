import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { creatPost ,UpdatePost} from '../actions/posts';

const Form = () => {
    const [postData, setpostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:null});
   const dispatch =useDispatch()
   const postsup =useSelector(state=>state.postToupdate)

useEffect(() => {
    if(postsup){
        setpostData(postsup)
    }
}, [postsup]);

const handlSubmit=()=>{

  if (postsup) {
    dispatch(UpdatePost(postsup._id,postData))
  } else {
    dispatch(creatPost(postData))

  }  
Clear()

}
const Clear=()=>{
    setpostData({
    creator:'',
    title:'',
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
                            {!postsup? 'Submit' :'Update'}
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
