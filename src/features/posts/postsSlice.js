import { createSlice } from "@reduxjs/toolkit"
import React, {useState, useEffect} from "react"





export const postsSlice = createSlice({
    name:'posts', 
    initialState: [], 
    reducers: {
        viewPost: (state, action) => {
            return [
                ...state, {
                    id: action.payload.id,
                    title: action.payload.title,
                }
            ]
        },

    }
})

export default postsSlice.reducer
export const postsSelector = (state) => state.posts
export const {viewPost} = postsSlice.actions