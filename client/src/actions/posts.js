import * as api from '../api/index.js';

// Action Creators are functions
// That return actions.

// payload is the data where we store all of our posts
// To fetch all the data sometime has to pass,
// This is why we have to use an additional
// error function that uses redux-thunk.
// which is an extra section like "async (dispatch) =>".
// Then have to write try catch sections as a whole
// with async functions
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // Instead of returning function
        // with redux-thunk, you have to dispatch it.
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.error(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        // Instead of returning function
        // with redux-thunk, you have to dispatch it.
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.error(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.error(error);
    }
}