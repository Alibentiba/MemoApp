import React, { useState } from 'react'
import './Post.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import moment from 'moment';
import { useDispatch,useSelector } from 'react-redux';
import {updatePost,DeletedPost,updateData} from '../Redux/Slice'
import * as api from '../api'


const Post = ({_id,creator,title,message,tags,selectedFile,createdAt,likCount}) => {
  const dispatch =useDispatch()

 //accec to Slice redux for gatting info
  const post= {_id,creator,title,message,tags,selectedFile,createdAt,likCount}
  const dataStauts =useSelector(state=>state.Store.Dataupddate)
  const [incrimentState, setincrimentState] = useState(true);


  const RemovePost =async()=>{
    dispatch(DeletedPost(_id))

          try {
              await api.RemovePost(_id)
          } catch (error) {
            console.log('The erroe',error)
          }
          dispatch(updateData(!dataStauts))

}

const LikePost =async()=>{
  setincrimentState(!incrimentState)
  try {
    if (incrimentState) {
      await api.LikePost(_id,{...post,likCount:likCount+1})
    } else {
      await api.LikePost(_id,{...post,likCount:likCount-1})
    }
  } catch (error) {
    console.log('The erroe',error)
  }
  dispatch(updateData(!dataStauts))
}



    return (
        <Card sx={{ maxWidth: 345 }} key={_id}>
            
          <CardMedia
            component="img"
            alt="green iguana"
            image={selectedFile}
            sx={{'&.MuiCardMedia-img':{
                    height:'290px',
                    marginBottom: '-70px'
                  }}}
                
                 
            />

              <div style={{
                bottom:210,
                position:'relative',
                color:'white',
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                
                }}>

                <div className=''>
                    <Typography className='Creator_Time1'>{creator}</Typography>
                    <Typography className='Creator_Time2'>{moment(createdAt).fromNow() }</Typography>
                </div>

              <Button  sx={{color:'white'}} onClick={()=>{dispatch(updatePost(post))}} >
                <MoreHorizIcon sx={{fontSize:'50px'}}/>
              </Button>
              </div>


          <CardContent  >
            <Typography gutterBottom  variant="body2" color='gray' component="div">
              {tags}
            </Typography>
            <Typography variant="h5" color="text.secondary">
           {message}
            </Typography>
          </CardContent>

          <CardActions sx={{justifyContent:'space-between'}}>
            <Button size="small" onClick={LikePost}><ThumbUpOutlinedIcon/>Likes {likCount}</Button>
            <Button size="small" onClick={RemovePost}><DeleteIcon/></Button>
          </CardActions>
        </Card>
      );
    }




export default Post