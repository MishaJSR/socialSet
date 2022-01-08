const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOWUSERS = 'SHOWUSERS';
const SETUSERS = 'SETUSERS';

let initialState = {
  users: [
    { id: 1, name: "111", status: "Chill", friend: true, location: { city: "Minsk", country: "Belarus" }, src: "https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-3.png" },
    { id: 2, name: "Vasya", status: "Sleep", friend: true, location: { city: "Moscow", country: "Russia" }, src: "https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-4.png" },
    { id: 3, name: "Petya", status: "Playing", friend: false, location: { city: "New York", country: "USA" }, src: "https://img.icons8.com/external-linector-flat-linector/64/000000/external-avatar-man-avatar-linector-flat-linector-2.png" },
    { id: 4, name: "Victor", status: "Full fun", friend: false, location: { city: "London", country: "GB" }, src: "https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-1.png" },
    { id: 5, name: "Valera", status: "Free", friend: false, location: { city: "Rome", country: "Italy" }, src: "https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-16.png" }
  ]
}

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case SHOWUSERS: {
      return {
        ...state,
        users: [...state.users]
      };
    }
    case FOLLOW: {
      // state.users[action.userId].friend = true;
      // state.users[action.userId].status = "yyy"; 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id = action.userId) {
            return { ...u, friend: true }
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      // state.users[action.userId].friend = false;
      // state.users[action.userId].status = "nnnn";
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id = action.userId){
            return { ...u, friend: false, status: "dsd" }
          }
          return u;
        })
      };
    }
    case SETUSERS: {
      // state.users[action.userId].friend = false;
      // state.users[action.userId].status = "nnnn";
      return {
        ...state,
        users: [...state.users, ...action.users]
    }
  }
    default:
      return state;
  }
}


export let onShowUsersAction = () => {
  return { type: SHOWUSERS };
}

export let onFollowAction = (id) => {
  return { type: FOLLOW, userId: id };
}

export let unFollowAction = (id) => {
  return { type: UNFOLLOW, userId: id };
}
export let setUsersAction = (users) => {
  return { type: SETUSERS, users: users };
}


export default reducerUsers;