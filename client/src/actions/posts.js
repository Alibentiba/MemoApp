import * as api from '../api'
//Action Creators
export const getPosts=()=>async(dispatch)=>{
try {
    const {data}=await api.fetchPosts()
    dispatch({type:'FETCH_ALL',payload:data})
    console.log('The Data are ',data)
} catch (error) {
    console.log(error.maessage)  
}
}
export const creatPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.creatPost(post)
        dispatch({type:'CREAT_POST',payload:data})
        console.log('The Data are ',data)
    } catch (error) {
        console.log(error.message)  
    }
    }