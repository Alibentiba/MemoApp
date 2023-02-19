import axios from "axios";
const url ='http://localhost:5000'
export const fetchPosts=()=> axios.get(url)

export const creatPost=(newpost)=> axios.post(url,newpost)

export const updatePost=(_id,newpost)=> axios.patch(`${url}/${_id}`,newpost)

export const RemovePost=(_id)=> axios.delete(`${url}/${_id}`)

export const LikePost=(_id,newpost)=> axios.patch(`${url}/${_id}`,newpost)

export const Signin=(userData)=> axios.post(`${url}/users/Signin`,userData)
export const Signup=(userData)=> axios.post(`${url}/users/Signup`,userData)




// router.post('/signin',Signin)
// router.post('/signup',Signup)
