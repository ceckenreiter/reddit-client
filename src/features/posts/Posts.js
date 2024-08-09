import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { getPosts } from "../api/api";

export default function Posts() {

    const [children, setChildren] = useState([])
    const waiting = async() => {
        const response = await getPosts()
        .catch(error => console.log(error))
      
        return response
    }

    console.log(waiting())
   
   
    return (
        <div id='posts'>
            {children.map((post) => (
                <NavLink  key={post.data.id} to={`/posts/${post.data.id}/${post.data.title}`}>{post.data.title}</NavLink>
            ))}
        </div>)
    
}

