const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOWUSERS = 'SHOWUSERS';
const SETUSERS = 'SETUSERS';
const CLICKPAGE = 'CLICKPAGE';
const SETUSERSCOUNT = 'SETUSERSCOUNT';

let initialState = {
  users: [
  ],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1
}

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case CLICKPAGE: {
      return {
        ...state,
        currentPage: action.page
      };
    }
    case SETUSERSCOUNT: {
      return {
        ...state,
        totalUsersCount: action.count
      };
    }
    case SHOWUSERS: {
      return {
        ...state,
        users: [...state.users]
      };
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId){
            return { ...u, followed: false}
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
        users: [...action.users]
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
export let clickPageAction = (page) => {
  return { type: CLICKPAGE, page: page };
}

export let setUsersCountAction = (count) => {
  return { type: SETUSERSCOUNT, count: count };
}


export default reducerUsers;