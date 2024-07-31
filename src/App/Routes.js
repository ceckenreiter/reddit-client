const ROUTES = {
    complaintForm: () => '/report',
    myProfile: () => '/me',
    postsRoute: () => '/posts',
    link: (id) => `/posts/link/${id}`,
    message:(id) => `/posts/message/${id}`,
    home: ()=> '/',
}


export default ROUTES; 