import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../Models/user.js'

export const Signup=async(req,res)=>{
    const {email,password,name}=req.body;
    try {
        const existingUser=await User.findOne({email})
        // verfy if the user exist or not
        if(existingUser) return res.status(400).json({message:'User alredy exist.'})

        //hashed The password 
        const hashedPassword =await bcrypt.hash(password,12)

        //combiane The user information 
        const result =await User.create({email,password:hashedPassword,name:name})

        //add Token To User
        const Token =jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"70d"})

        //return The user info with Token
        res.status(200).json({result,Token,message:'User created'})
    } catch (error) {
        res.status(500).json({message:'Something went wrong.'})
    }

    
}

export const Signin=async(req,res)=>{
    //keep The user info from Body 
    const {email,password} =req.body
    try {
        // Checking if Thé user already exists
        const existingUsrer =await User.findOne({email})

        //if The user aleady exist return That message
        if(!existingUsrer)return res.status(404).json({message:'User doesn existe'})

         //compare The password coming from body with the password in db
        const ispasswordCorrect=await bcrypt.compare(password,existingUsrer.password)

        //if the passwords do not identical retune that message
        if(!ispasswordCorrect)return res.status(400).json({message:'invalide password'})

        //if identicals pass the Token 
        const Token =jwt.sign({email:existingUsrer.email,id:existingUsrer._id},'test',{expiresIn:'10d'})

        //return The user info with Token
        res.status(200).json({result:existingUsrer,Token})
        
    } catch (error) {
        res.status(500).json({message:`Something went wrong`})
    }
}


export const Profile=async(req,res)=>{
    const Token =req.body

    try {
        const decodedToken =await jwt.verify(Token,'test') 
        const email =await decodedToken.email
        res.status(200).json({result:email})
        
    } catch (error) {
        res.status(500).json({message:"email"})
    }
}



