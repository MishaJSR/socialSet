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
    return {
       ...state,
       newMessageText: action.text
      };
  }
  else if (action.type === SEND_MESSSAGE) {
    let body = state.newMessageText;
    return {
      ...state,
      newMessageText: '',
      messageData: [...state.messageData, {id: 6, content: body}]
    };
  } 
  else return state;
}


export let sendMessage = () => {
  return { type: SEND_MESSSAGE };
}


export let updateNewMessage = (newText) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, text: newText };
}

export default reduserDialog;