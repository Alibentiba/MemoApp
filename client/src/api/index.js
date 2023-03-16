import axios from "axios";
const API= axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{

if (localStorage.getItem('profile')) {
    req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).Token}`
}
return req})

export const fetchPosts=()=> API.get('/')

export const creatPost=(newpost)=> API.post('/',newpost)

export const updatePost=(_id,newpost)=> API.patch(`/${_id}`,newpost)

export const RemovePost=(_id)=> API.delete(`/${_id}`)

export const LikePost=(_id,newpost)=> API.patch(`/${_id}`,newpost)

export const Signin=(userData)=> API.post(`/users/Signin`,userData)
export const Signup=(userData)=> API.post(`/users/Signup`,userData)




