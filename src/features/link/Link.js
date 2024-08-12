import React from "react";
import Comments from "../comments/Comments";
import { useSelector } from "react-redux";
import { postsSelector } from "../posts/postsSlice";
import { useParams } from "react-router-dom";
import { store } from "../../App/Store";


export default function Link () {
    const postsArray = useSelector(postsSelector)
    const postParamArray = Object.values(useParams())
    const id = postParamArray[0]

    const post = postsArray.find(element => element.id === id)

    return (
        <div id='link'>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <p>{post.url}</p>
            <Comments></Comments>
        </div>
    )

}