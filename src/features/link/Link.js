import React from "react";
import Comments from "../comments/Comments";
import { useSelector } from "react-redux";
import { postsSelector } from "../posts/postsSlice";
import { useParams } from "react-router-dom";

export default function Link () {
    const posts = useSelector(postsSelector)
    const linkObjects = useParams()
    const linkParamArray = Object.values(linkObjects)
    
    const linkObject = posts.find((post) => post.id===`${linkParamArray[1]}`)


    return (
        <div id='link'>
            <p>hi</p> 

        </div>
    )

}