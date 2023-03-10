import * as api from '../api'
export const RgisterUser=({name,email,password})=>async(dispatch)=>{
try {
    console.log('The user is',{name,email,password})

    const {data}=await api.Signup({name,email,password})

    dispatch({type:'AUTH',payload:data})

} catch (error) {
    console.log('error.maessage',{name,email,password})  
}}