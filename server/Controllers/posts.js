import mongoose from 'mongoose'
import PostMessage from '../Models/postMessage.js'

export  const getPosts =async(req,res)=>{
 try {
    const postMessage= await PostMessage.find()
    res.status(200).json(postMessage)
 } catch (error) {
    res.status(200).json({message:error.message}) }
}



export  const createPosts =async(req,res)=>{
    const newPost=new PostMessage(req.body)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {

        res.status(209).json({message:error.message}) 

    }
}


export  const updatePosts =async(req,res)=>{
    const {id}=req.params;
    const post =req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that is')
     const updatedPost= await PostMessage.findByIdAndUpdate(id,post,{new:true})
     res.json(updatedPost)
}



export  const RemovePost =async(req,res)=>{
    const {id}=req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post withe That Id')
    const DeletedPost=  await PostMessage.findByIdAndDelete(id)
    res.json(DeletedPost)
}



export  const LikePost =async(req,res)=>{
    const {id}=req.params;
    const post =req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that is')
     const updatedPost= await PostMessage.findByIdAndUpdate(id,post,{new:true})
     res.json(updatedPost)
 
}




