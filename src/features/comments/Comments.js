import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelector } from "../posts/postsSlice";
import { NavLink } from "react-router-dom";


export default function Comments () {
    const posts = useSelector(postsSelector)
    const postParams = useParams()
    const postParamArray = Object.values(postParams)
    const postObject = posts.find(object => object.id===postParamArray[1])
    const commentsArray = postObject.comments


    if (commentsArray === undefined) {
        return (
            <div>No Comments</div>
        )
    } else {
    return (
        <div class='comments'>
            {commentsArray.map((comment) => (
               <NavLink key={comment.id} to={`/posts/${postParamArray[0]}/${postParamArray[1]}/${comment.id}`}>{comment.body}</NavLink>
            ))}
        </div>
    )
    }
}

