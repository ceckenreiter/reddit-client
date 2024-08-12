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
                    url: action.payload.url,
                    author: action.payload.author,
                    title: action.payload.title,
                    comments: action.payload.comments,
                }
            ]
        },

    }
})

export default postsSlice.reducer
export const postsSelector = (state) => state.posts
export const {viewPost} = postsSlice.actions