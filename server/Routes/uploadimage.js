import  express  from "express";
import {uploadimage} from '../Controllers/uploadimage.js'
const router=express.Router()
router.post('/img',uploadimage)
export default router