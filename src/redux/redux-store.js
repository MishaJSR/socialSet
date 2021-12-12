import { combineReducers, createStore } from "redux";
import reduserDialog from "./reduserDialog";
import reduserProfile from "./reduserProfile";

let redusers = combineReducers({
    profilePage: reduserProfile,
    dialogPage: reduserDialog
});

let store =  createStore(redusers);


export default store;