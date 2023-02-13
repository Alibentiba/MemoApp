import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
  name:'Slice',
  initialState: {
    allPosts:[],
    postToupdate:null,
    postToDelete:null,
    Dataupddate:false
  },
  reducers: {
    getAllPosts: (state,action) => {
      
      state.allPosts =action.payload
    },
    updatePost: (state,action) => {
      
      state.postToupdate=action.payload
    },
    DeletedPost: (state,action) => {
      
      state.postToDelete=action.payload
    }
    ,
    updateData: (state,action) => {
      
      state.Dataupddate=action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getAllPosts, updatePost,DeletedPost,updateData} = Slice.actions

export default Slice.reducer