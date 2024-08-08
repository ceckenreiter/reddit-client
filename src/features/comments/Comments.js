import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelector } from "../posts/postsSlice";
import Comment from "../comment/Comment";


export default function Comments () {
    const posts = useSelector(postsSelector)
    const postParams = useParams()
    const postParamArray = Object.values(postParams)
    const postObject = posts.find(object => object.id===postParamArray[1])
    const commentsArray = postObject.comments

    if (commentsArray === undefined) {
        return (
            <div id='noComments'>No Comments</div>
        )
    } else {
    return (
        <div id='comments'>
            {commentsArray.map((comment) => (
               <Comment key={comment.name} id={comment.id}/>
            ))}
        </div>
    )
    }
}

