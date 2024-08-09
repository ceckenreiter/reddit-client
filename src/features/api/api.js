import { useEffect, useState } from "react"

export const getPosts = () => {
    const get = async() => {
        var authParams = {
            headers: {
                accept: 'application.json'
            }
         }
        
        const result = await fetch('https://www.reddit.com/r/reddit.com/.json', authParams)
        .then((data) => data.json())
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch(error => console.log(error))
       
        return result
    }
    const blank = get()    
    return blank
}