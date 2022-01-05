const ADD_POST = 'ADD-POST';
const AREA_CHANGE = 'AREA-CHANGE';


// let initialState = {}
let initialState = {
  postData: [
    { id: 1, content: "How are you?", likes_count: 12 },
    { id: 2, content: "Good Day", likes_count: 92 },
    { id: 3, content: "I am Andy", likes_count: 422 },
    { id: 4, content: "I am Peter", likes_count: 162 }
  ],
  newPostText: 'Hello, User'
};

const reduserProfile = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let NewPost = {
        id: 5,
        content: state.newPostText,
        likes_count: 0
      };
      let stateCopy = {
        ...state,
        postData: [...state.postData]
      };
      stateCopy.postData.push(NewPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case AREA_CHANGE: {
      let stateCopy = {...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
  // if (action.type === ADD_POST) {
  //     let NewPost = {
  //       id: 5,
  //       content: state.newPostText,
  //       likes_count: 0
  //     }
  //     let stateCopy = {...state};
  //     stateCopy.postData = [...state]
  //     stateCopy.postData.push(NewPost);
  //     stateCopy.newPostText = "";
  //     return stateCopy;
  //   } 
  //   else if (action.type === AREA_CHANGE) {
  //     let stateCopy = {...state};
  //     stateCopy.newPostText = action.text;
  //     return stateCopy;
  //   } 
  //   else return state;
}

export let addPostAction = () => {
  return { type: ADD_POST };
}

export let onPostChangeAction = (text) => {
  return { type: AREA_CHANGE, text: text };
}

export default reduserProfile;