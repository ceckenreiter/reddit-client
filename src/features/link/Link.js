import React from "react";

export default function Link () {

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
        <p>Link</p>
    )

}