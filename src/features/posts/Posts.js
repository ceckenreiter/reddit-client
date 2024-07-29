import React from "react";
import Message  from '../message/Message'
import Link from '../link/Link'
import { NavLink } from "react-router-dom";
import ROUTES from "../../App/Routes";

export default function Posts() {

    const allPosts = [
        {
            name: 'post1', 
            id: 'p1', 

        },
        {
            name: 'post2', 
            id: 'p2', 
        },
        {
            name: 'post3', 
            id: 'p3', 
        }
    ] 



    const trending = []; 
    const myPosts = []
    

    return (
        <div>
            {allPosts.map((item) => 
                <NavLink to={ROUTES.specificPost(`${item.id}`)}>{item.name}</NavLink>

            )}
        </div>
    )

}