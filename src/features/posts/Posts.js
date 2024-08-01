import React from "react";
import { NavLink } from "react-router-dom";
import allPosts from './PostArray'

export default function Posts() {


    
    return (
        <div id='posts'>
            {allPosts.map((item) => (
                item.type==='link' ? 
                <NavLink key={item.id} to={`/posts/${item.type}/${item.id}`}>{item.name}: {item.type}</NavLink>
                :
                <NavLink key={item.id} to={`/posts/${item.type}/${item.id}`}>{item.name}</NavLink>
            ))}
        </div>
    )

}