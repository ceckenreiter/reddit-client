import { createSlice } from "@reduxjs/toolkit"
import allPosts from "./PostArray"


export const postsSlice = createSlice({
    name:'posts', 
    initialState: allPosts, 
    reducers: {

    }
})

export default postsSlice.reducer
export const postsSelector = (state) => state.posts