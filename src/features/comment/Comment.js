import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelector } from "../posts/postsSlice";


export default function Comment (prop, id) {
    const posts = useSelector(postsSelector)
    const postParamArray = Object.values(useParams())
    const postObject = posts.find((post) => post.id===`${postParamArray[1]}`)
    const allComments = postObject.comments
    const thisComment = allComments.find((comment) => comment.id === `${prop.id}`)

    const example = {
        author: '', 
        body: '', 
        likes: ' true if profileOwner upvoted false if not', 
        ups: 'number of upvotes', 
        downs: 'number of down votes', 

    }
 
    return (
        <div id='comment'>
            <p>{thisComment.author}</p>
            <p>{thisComment.body}</p>
            <p>{thisComment.time}</p>  
        </div>

    )
}