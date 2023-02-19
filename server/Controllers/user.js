import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../Models/user.js'

export const Signup=async(req,res)=>{
    const {email,password,confirmPassword,firstName,LastName}=req.body;
    try {
        const existingUser=await User.findOne({email})
        // verfy if the user exist or not
        if(existingUser) return res.status(400).json({message:'User alredy exist.'})
        //verfy if the password and confirm passwor matched
        if(password !== confirmPassword)return res.status(400).json({message:'password doesnt match'})
        //hashed The password 
        const hashedPassword =await bcrypt.hash(password,12)
        //combiane The user information 
        const result =await User.create({email,password:hashedPassword,name:`${firstName}${LastName}`})
        //add Token To user
        const Token =jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"})
        res.status(200).json({result,Token})
    } catch (error) {
        res.status(500).json({message:'Something went wrong.'})
    }

    
}

export const Signin=async(req,res)=>{
    const {email,password} =req.body
    try {
        const existingUser =await User.findOne(email)
        if(!existingUser)return res.status(404).json({message:'User doesn existe'})
        const ispasswordCorrect=await bcrypt.compare(password,existingUser.password)
        if(!ispasswordCorrect)return res.status(400).json({message:'invalide password'})
        const Token =jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'10d'})
        res.status(200).json({result:existingUser,Token})
        
    } catch (error) {
        res.status(500).json({message:`Something went wrong`})
    }



}
