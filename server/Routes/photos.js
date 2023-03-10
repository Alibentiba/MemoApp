import  express  from "express";
import {Signin,Signup,Profile} from '../Controllers/user.js'
const router=express.Router()
router.post('/Signin',Signin)
router.post('/Signup',Signup)
router.post('/Profile',Profile)

export default router