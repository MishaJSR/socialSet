import React from 'react';
import { connect } from 'react-redux';
import { onShowUsersAction } from '../../redux/reduserUsers';
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
        stateU: state.usersPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onShowUsers: () => {
            dispatch(onShowUsersAction());
        }
    }
}

const MyUsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default MyUsersContainer;