const ADD_POST = 'ADD-POST';
const AREA_CHANGE = 'AREA-CHANGE';
const GET_NEW_POST_TEXT = 'GET-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSSAGE = 'SEND_MESSSAGE';




const reduserProfile = (state, action) => {
    if (action.type === ADD_POST) {
        let NewPost = {
          id: 5,
          content: state.profilePage.newPostText,
          likes_count: 0
        }
        state.profilePage.postData.push(NewPost);
        state.profilePage.newPostText = "";
        return state;
      } 
      else if (action.type === AREA_CHANGE) {
        state.profilePage.newPostText = action.text;
        return state;
      } 
      else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.dialogPage.newMessageText = action.text;
        return state;
      } 
      else if (action.type === SEND_MESSSAGE) {
        let body = {
          id: 5,
          content:  state.dialogPage.newMessageText
        }
        state.dialogPage.newMessageText = '';
        state.dialogPage.messageData.push(body);
        return state;
      }
}

export default reduserProfile;