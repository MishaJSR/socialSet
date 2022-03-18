import { getHeaderAxi } from "../scripts/auth";

const SET_USERS_DATA = 'SET_USERS_DATA';
const COMPLETED_AUTH = 'COMPLETED_AUTH';



// let initialState = {}
let initialState = {
  userId: null,
  email: null,
  login: null,
  message: null,
  isAuth: false
};

const reduserAuth = (state = initialState, action) => {

  switch (action.type) {
    case SET_USERS_DATA: {
      return {
        ...state,
        userId: action.userData.userId,
        email: action.userData.email,
        login: action.userData.login
      };
    }
    case COMPLETED_AUTH: {
      return {
        ...state,
        isAuth: true
      };
    }
    default:
      return state;
  }
}

// export let addPostAction = () => {
//   return { type: ADD_POST };
// }

export let completedAuth = () => {
  return { type: COMPLETED_AUTH };
}

export let setUserAuthData = (userId, email, login) => {
  return { type: SET_USERS_DATA, userData: { userId, email, login } };
}

export const getHeaderThunk = () => {
  return (dispatch) => {
    getHeaderAxi()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(completedAuth());
          dispatch(setUserAuthData(response.data.data.id, response.data.data.email, response.data.data.login))
        }
      });
  }
}

export default reduserAuth;