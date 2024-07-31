import React from "react";
import Posts from "../features/posts/Posts";
import SearchBar from "../features/searchBar/searchBar";

export default function ClientView () {
    return(
        <div id='client-view'>
            <SearchBar />
            <Posts />
        </div>
    )
}