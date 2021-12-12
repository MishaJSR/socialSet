const ADD_POST = 'ADD-POST';
const AREA_CHANGE = 'AREA-CHANGE';

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
    if (action.type === ADD_POST) {
        let NewPost = {
          id: 5,
          content: state.newPostText,
          likes_count: 0
        }
        state.postData.push(NewPost);
        state.newPostText = "";
        return state;
      } 
      else if (action.type === AREA_CHANGE) {
        state.newPostText = action.text;
        return state;
      } 
}

export default reduserProfile;