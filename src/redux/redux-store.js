import { combineReducers, createStore } from "redux";
import reduserDialog from "./reduserDialog";
import reduserProfile from "./reduserProfile";
import reduserSidebar from "./reduserSidebar";



let reducers = combineReducers({
    profilePage: reduserProfile,
    dialogPage: reduserDialog,
    sidebar: reduserSidebar
});

let store =  createStore(reducers);



export default store;