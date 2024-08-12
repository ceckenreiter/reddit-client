import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from '../features/comments/commentsSlice'
import commentReducer from '../features/comment/commentSlice'
import postsReducer from '../features/posts/postsSlice'
import linkReducer from '../features/link/LinkSlice'
import messageReducer from '../features/message/messageSlice'
import profileReducer from '../features/profile/profileSlice'

export const store =  configureStore({
    reducer: {
        comments: commentsReducer, 
        comment: commentReducer, 
        posts: postsReducer, 
        link: linkReducer, 
        message: messageReducer,

    }
})

