import React from 'react';
import { connect } from 'react-redux';
import { onFollowAction, onShowUsersAction, unFollowAction } from '../../redux/reduserUsers';
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
        },
        onFollow: (id) => {
            dispatch(onFollowAction(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAction(id));
        }
    }
}

const MyUsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default MyUsersContainer;