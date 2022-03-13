import { applyMiddleware, combineReducers, createStore } from "redux";
import reduserAuth from "./reducerAuth";
import reduserDialog from "./reduserDialog";
import reduserProfile from "./reduserProfile";
import reduserSidebar from "./reduserSidebar";
import reducerUsers from "./reduserUsers";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    profilePage: reduserProfile,
    dialogPage: reduserDialog,
    sidebar: reduserSidebar,
    usersPage: reducerUsers,
    auth: reduserAuth
});

let store =  createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;