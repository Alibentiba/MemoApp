import * as api from '../api'
//Action Creators
export const getPosts=()=>async(dispatch)=>{
try {
    const {data}=await api.fetchPosts()
    dispatch({type:'FETCH_ALL',payload:data})
} catch (error) {
    console.log(error.maessage)  
}}

export const creatPost=(post)=>async(dispatch)=>{
    console.log('post action',post)
    try {
        const {data}=await api.creatPost(post)
        dispatch({type:'CREAT_POST',payload:data})
    } catch (error) {
        console.log(error.message)  
    }}
    
    export const deletePost=(id)=>async(dispatch)=>{
        try {
            const {data}=await api.RemovePost(id)
            dispatch({type:'DELETE_POST',payload:data})
        } catch (error) {
            console.log(error.message)  
        }}


        export const UpdatePost=(id,post)=>async(dispatch)=>{
            try {
                const {data}=await api.updatePost(id,post)
                dispatch({type:'UPDATE_POST',payload:data})
              
            } catch (error) {
                console.log(error.message)  
            }}


            export const setUpdatePost=(post)=>async(dispatch)=>{
                try {
                   
                        dispatch({type:'SETUPDATE_POST',payload:post})

                  
                  
                } catch (error) {
                    console.log(error.message)  
                }}

                export const setPostDetails=(post)=>async(dispatch)=>{
                    try {
                            dispatch({type:'SETDETAILS_POST',payload:post})
                    } catch (error) {
                        console.log(error.message)  
                    }}
             