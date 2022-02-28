import { combineReducers, createStore } from "redux";
import reduserDialog from "./reduserDialog";
import reduserProfile from "./reduserProfile";
import reduserSidebar from "./reduserSidebar";
import reducerUsers from "./reduserUsers";


let reducers = combineReducers({
    profilePage: reduserProfile,
    dialogPage: reduserDialog,
    sidebar: reduserSidebar,
    usersPage: reducerUsers
    
});

let store =  createStore(reducers);

window.store = store;

export default store;