import React from "react";

export default function SearchBar () {
    

    const handleFocus = () => {
        console.log('hi')
        
    }


    return(
        <input id='search-bar' type='search' onFocus={handleFocus}></input>
    )
}