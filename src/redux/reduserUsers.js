
const SHOWUSERS = 'SHOWUSERS';


let initialState = {
  usersPage: [
    { id: 1, name: "111" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Petya" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" }
  ]
}

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case SHOWUSERS: {
      return {
        ...state,
        usersPage: [...state.usersPage]
      };
    }
    default:
      return state;
  }
}


export let onShowUsersAction = () => {
  return { type: SHOWUSERS };
}


export default reducerUsers;