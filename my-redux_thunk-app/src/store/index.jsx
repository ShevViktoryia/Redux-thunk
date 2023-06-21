import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import {postsReducer} from "./postsReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { commentsReducer } from "./commentsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));