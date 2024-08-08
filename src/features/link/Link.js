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
    
    
    const API = {
        author: '', 
        domain: 'domain of link',
        locked: 'boolean for if locked to comments',
        likes: ' true if profileOwner upvoted false if not', 
        media: 'object', 
        num_comments: 'number of comments (including removed)',
        over_18: 'true of post is marked NSFW', 
        saved: 'true of saved by user',
        score: 'net-score of link (upvotes munus downvotes)',
        subreddit: 'subreddit', 
        subreddit_id: 'subreddit id',
        thumbnail: 'full URL to thumbnail for link -- self if self post, image if image w/ no thumbnail, default',
        title: 'title of link',
        url: 'link of post', 
        edited: 'indicates if link has been edited returns timestame or false',
        stickied: '????', 
        ups: 'the number upvotes',
        downs: 'the number of downvotes', 
        
        created: 'time of creation in local epoch-second form',
        created_utc: 'time of creation in UTC epock second format',

    }



    return (
        <div id='link'>
            <p>{linkObject.name}</p>
            <Comments />

        </div>
    )

}