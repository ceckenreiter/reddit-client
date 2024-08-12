import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../api/api";
import { viewPost } from "./postsSlice";
import { store } from "../../App/Store";


 export default function Posts() {
    const [children, setChildren] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const waiting = async() => {
            const response = await getPosts()
            .then((data) => {
                setChildren(data)
            })
            .catch(error => console.log(error))
            return 
        }
        if (children.length === 0) {
            const response = waiting()
        } 
    }, [])

    const getPost = () => {
        children.forEach((child) => {
        dispatch(viewPost({
            id: child.data.id, 
            url: child.data.url, 
            author: child.data.author,
            title: child.data.title, 
            comments: child.data.comments
        })) 

    })}
    getPost()

    return (
        <div id='posts'>
            {children.map((post) => (
                <NavLink  key={post.data.id} to={`/posts/${post.data.id}/${post.data.title}`}>{post.data.title}</NavLink>
            ))}
        </div>)
    
}

