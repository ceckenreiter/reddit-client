import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name:'message', 
    initialState: {

    }, 
    reducers: {

    }
})

export default messageSlice.reducer
export const messageSelector = state => state.posts.message