import React from "react";

export default function LoginButton () {
    const REDIRECT_URI = 'http://localhost:3000';
    const TYPE ='code';
    const secret =  "bNUt3_oNYnJK952O8RU8h9qh6a9A-w";
    const CLIENT_ID = "xXwHfjkHVN0gpVzO7S3kbQ"; 
    const STATE = 'abcde'
    const DURATION  = 'temporary'
    const SCOPE = 'identity'

    return (
        <div id='button'>
            <a href={`https://www.reddit.com/api/v1/authorize?state=${STATE}&duration=${DURATION}&response_type=${TYPE}&scope=${SCOPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}>
            <button>Login to Account</button>
            </a>
        </div>
    )
}


