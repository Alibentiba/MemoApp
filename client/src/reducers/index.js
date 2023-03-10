import { combineReducers } from "redux";
import posts from './posts'
import postToupdate from "./postToUpdate";
import users from "./users";
export default combineReducers({posts,postToupdate,users})
