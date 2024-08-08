import React, {useState} from "react";

export default function SearchBar () {

    const [search, setSearch] = useState('')
    
    

    const handleFocus = () => {
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)

        
    }
    const handleChange = (e) => {
        setSearch(e.target.value)

        
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id='search-bar' type='search' onFocus={handleFocus} onChange={handleChange}></input>

            </form>
        </div>
    )
}