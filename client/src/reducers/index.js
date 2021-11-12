import { combineReducers } from 'redux';
import posts from './posts';

export default combineReducers({
    // since key and value pair are same,
    // we can write them as this:
    // posts
    // instead of
    // posts: posts
    posts: posts
});