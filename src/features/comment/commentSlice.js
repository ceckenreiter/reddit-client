import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name:'card', 
    initialState:{
      
    }, 
    reducers: {
            
        

    }
})

export default commentSlice.reducer
export const commentSelector = state => state.comments.comment
