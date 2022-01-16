import React from 'react';
import { connect } from 'react-redux';
import { clickPage, isFethingBut, onFollow, unFollow, onShowUsers, swapSlice, setUsers, setCountUsers } from '../../redux/reduserUsers';
import UsersAPI from './UsersAPI';

// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>  
//             {(store) => {

//                 let onPostChange = (text) => {
//                     store.dispatch(onPostChangeAction(text));
//                 }

//                 let addPost = () => {
//                     store.dispatch(addPostAction());
//                 }

//                 return <MyPosts onPostChange={onPostChange} addPost={addPost} state={store.getState()} />
//             }
//         }

//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        startPage: state.usersPage.startPage,
        endPage: state.usersPage.endPage,
        isReversBut: state.usersPage.reversBut,
        isFething: state.usersPage.isFething
    }
}

// let mapDispatchToProps = (dispatch) => {
    
//     return {
//         onShowUsers: () => {
//             dispatch(onShowUsersAction());
//         },
//         onFollow: (id) => {
//             dispatch(onFollowAction(id));
//         },
//         unFollow: (id) => {
//             dispatch(unFollowAction(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAction(users));
//         },
//         clickPage: (page) => {
//             dispatch(clickPageAction(page));
//         },
//         setCountUsers: (count) => {
//             dispatch(setUsersCountAction(count));
//         },
//         swapSlice: (flag) => {
//             if (flag) dispatch(onSwapSliceP()) 
//             else dispatch(onSwapSliceM())
//         },
//         isFethingBut: (flag) => {
//             dispatch(isFethingAction(flag));
//         }
//     }
// }



const MyUsersContainer = connect (mapStateToProps, 
    {   onShowUsers, onFollow, unFollow,
        setUsers, clickPage, setCountUsers,
        swapSlice, isFethingBut}) (UsersAPI);

export default MyUsersContainer;