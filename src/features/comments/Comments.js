import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelector } from "../posts/postsSlice";
import Comment from "../comment/Comment";


export default function Comments () {
    const posts = useSelector(postsSelector)
    const postParamArray = Object.values(useParams())
    const postObject = posts.find(object => object.id===postParamArray[0])
    console.log(postObject)
    const commentsArray = []

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

