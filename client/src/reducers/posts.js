// state also has to be equal to something
// This is the reason we have to set an initial value.
// Our state is the posts empty array in this example.
export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}