import  express  from "express";
import {getPosts,createPosts,updatePosts,RemovePost,LikePost} from '../Controllers/posts.js'
const router=express.Router()

router.get('/',getPosts)
router.post('/',createPosts)
router.patch('/:id',updatePosts)
router.delete('/:id',RemovePost)
router.patch('/:id',LikePost)
export default router
 
