import  express  from "express";
import {getPosts,createPosts,updatePosts,RemovePost,LikePost} from '../Controllers/posts.js'
import auth from "../middleware/auth.js";
const router=express.Router()

router.get('/',getPosts)
router.post('/',auth,createPosts)
router.patch('/:id',auth,updatePosts)
router.delete('/:id',auth,RemovePost)
router.patch('/:id',auth,LikePost)

export default router
 
