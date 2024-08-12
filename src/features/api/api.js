import { viewPost } from "../posts/postsSlice"


export const getPosts = () => {
    const get = async() => {

        var authParams = {
            headers: {
                accept: 'application.json'
            }
         }
        
        const result = await fetch('https://www.reddit.com/r/reddit.com/.json', authParams)
        const json = await result.json()
        .catch(error => console.log(error))
        console.log(json)

        return json.data.children
    }
    const blank = get()    
    return blank
}