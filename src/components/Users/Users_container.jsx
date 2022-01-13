import React from 'react';
import { connect } from 'react-redux';
import { clickPageAction, onFollowAction, onShowUsersAction, onSwapSliceM, onSwapSliceP, setUsersAction, setUsersCountAction, unFollowAction } from '../../redux/reduserUsers';
import Users from './Users';
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
        reversBut: state.usersPage.reversBut
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onShowUsers: () => {
            dispatch(onShowUsersAction());
        },
        onFollow: (id) => {
            dispatch(onFollowAction(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAction(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users));
        },
        clickPage: (page) => {
            dispatch(clickPageAction(page));
        },
        setCountUsers: (count) => {
            dispatch(setUsersCountAction(count));
        },
        swapSlice: (flag) => {
            if (flag) dispatch(onSwapSliceP()) 
            else dispatch(onSwapSliceM())
        }
    }
}
const MyUsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default MyUsersContainer;