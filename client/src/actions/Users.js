import * as api from '../api'

export const RgisterUser=({name,email,password})=>async(dispatch)=>{
try {

    const {data}=await api.Signup({name,email,password})
    dispatch({type:'AUTH',payload:data})
} catch (error) {
    console.log('error.maessage')  
}}
export const singIn=({email,password})=>async(dispatch)=>{
    try {
    
        const {data}=await api.Signin({email,password})
    
        dispatch({type:'AUTH',payload:data})
    
    } catch (error) {
        console.log('error.maessage')  
    }}

    export const Logout=()=>async(dispatch)=>{
        try {
            dispatch({type:'LOGOUT',payload:null})
        } catch (error) {
            console.log('error.maessage')  
        }}


