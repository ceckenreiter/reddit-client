import React from "react";
export default function Profile () {
   
    const userProfile = {
        name: 'username', 
        created: 'date of creation',
        comment_karma: 'num',
        id: 'id of accont',
        comments: [],
        posts: [],

    }

    return (
        <div id='profile'>
            <p>{userProfile.name}</p>
            <p>{userProfile.created}</p>
            <p>{userProfile.comment_karma}</p>
            <p>{userProfile.id}</p>
        </div>

    )

}