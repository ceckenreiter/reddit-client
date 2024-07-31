import React from "react";
import Comments from "../comments/Comments";

export default function Message () {

    

    const API = {
        author: '',
        body: 'message', 
        context: 'if comment adds ?context=3 to permalink', 
        first_message: 'null or first message ID', 
        likes: 'how user voted boolean',
        link_title: 'if comment then title of thread', 
        name: 'string', 
        parent_id: 'null if no parent attached', 
        replies: 'empty string if none', 
        subject: 'subject of message', 
        subreddit: 'null if not comment', 
        was_comment: 'boolean'
    }



    return (
        <div class='message'>
            <p>message</p>
            <Comments />
        
        </div>
    )
}