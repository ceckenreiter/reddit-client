const ROUTES = {
    complaintForm: () => '/report',
    myProfile: () => '/me',
    postsRoute: () => '/posts',
    specificPost: (id) => `/posts/${id}`,
    home: ()=> '/',
}

export default ROUTES; 