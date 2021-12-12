const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSSAGE = 'SEND_MESSSAGE';


let initialState = {
  dialogData: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Petya" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" }
  ],

  messageData: [
    { id: 1, content: ["Hi", "Eraa"] },
    { id: 2, content: ["Wow", "Riif"] },
    { id: 3, content: ["Feeaf", "Iriska"] },
    { id: 4, content: ["Meean", "Rest"] },
  ],
  newMessageText: ''
}

const reduserDialog = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text;
        return state;
      } 
      else if (action.type === SEND_MESSSAGE) {
        let body = {
          id: 5,
          content:  state.newMessageText
        }
        state.newMessageText = '';
        state.messageData.push(body);
        return state;
      }
}

export default reduserDialog;