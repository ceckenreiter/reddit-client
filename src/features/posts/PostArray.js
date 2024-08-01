const allPosts = [
    {
        name: 'post1', 
        id: 'p1', 
        type: 'message', 
        date: 'Aug-1-24', 
        time: '13:00', 
        comments: [
            {
                author: 'author',
                time: '18:00', 
                type: 'message', 
                body: 'here is a 1',
                id: 'comment 1'
            },
            {
                author: 'author',
                time: '13:00', 
                type: 'message', 
                body: 'here is a 2',
                id: 'comment 2'
            },
            {
                author: 'author',
                time: '10:00', 
                type: 'message', 
                body: 'here is a 4',
                id: 'comment 3'
            },
        ]

    },
    {
        name: 'post2', 
        id: 'p2', 
        type: 'link'
    },
    {
        name: 'post3', 
        id: 'p3', 
        type: 'link',
        comments: [
            {
                author: 'author',
                time: '18:00', 
                type: 'message', 
                body: 'here is a 2',
                id: 'comment 1'
            },
            {
                author: 'author',
                time: '13:00', 
                type: 'message', 
                body: 'here is a 4',
                id: 'comment 2'
            },
            {
                author: 'author',
                time: '10:00', 
                type: 'message', 
                body: 'here is a 5',
                id: 'comment 3'
            },
        ]
    }
] 

export default allPosts