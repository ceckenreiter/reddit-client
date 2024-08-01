import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsSelector } from "../posts/postsSlice";


export default function Comment (prop) {
    const posts = useSelector(postsSelector)
    const postParams = useParams()
    const postID = Object.values(postParams)
    const postObject = posts.find(object => object.id===`${postID}`)
    const commentsArray = postObject.comments


    const API = {
        author: '', 
        body: '', 
        likes: ' true if profileOwner upvoted false if not', 
        ups: 'number of upvotes', 
        downs: 'number of down votes', 
        

    }

    return (
        <div class='comment'>
            <p>{prop.body}</p>
        </div>

    )
}