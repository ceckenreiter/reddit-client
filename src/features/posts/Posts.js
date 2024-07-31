import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../App/Routes";
import allPosts from './PostArray'

export default function Posts() {
    
    return (
        <div id='posts'>
            {allPosts.map((item) => (
                item.type==='link' ? 
                <NavLink to={ROUTES.link(`${item.id}`)}>{item.name}: {item.type}</NavLink>
                :
                <NavLink to={ROUTES.message(`${item.id}`)}>{item.name}</NavLink>
            ))}
        </div>
    )

}