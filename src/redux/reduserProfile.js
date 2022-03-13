import { getProfileAxi } from "../scripts/auth";

const ADD_POST = 'ADD-POST';
const AREA_CHANGE = 'AREA-CHANGE';
const SET_USER_DATA = 'SET_USER_DATA';



// let initialState = {}
let initialState = {
  postData: [
    { id: 1, content: "How are you?", likes_count: 12 },
    { id: 2, content: "Good Day", likes_count: 92 },
    { id: 3, content: "I am Andy", likes_count: 422 },
    { id: 4, content: "I am Peter", likes_count: 162 }
  ],
  userData: null,
  newPostText: 'Hello, User'
};

const reduserProfile = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let NewPost = state.newPostText;
      return {
        ...state,
        newPostText: '',
        postData: [...state.postData, {id: 5, content: NewPost, likes_count: 2}]
      };
    }
    case AREA_CHANGE: {
      return {
        ...state,
        newPostText: action.text
      };
    }
    case SET_USER_DATA: {
    
      return {
        ...state,
        userData: action.userData
      };
    }
    default:
      return state;
  }

}

export let addPostAction = () => {
  return { type: ADD_POST };
}

export let onPostChangeAction = (text) => {
  return { type: AREA_CHANGE, text: text };
}

export let setUserData = (userData) => {
  debugger
  return { type: SET_USER_DATA, userData };
}

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    getProfileAxi(userId)
    .then(response => {
        debugger;
        dispatch(setUserData(response.data));
    });
  }
}

export default reduserProfile;