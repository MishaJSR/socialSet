import React from 'react';
import { addPostAction, onPostChangeAction } from '../../../redux/reduserProfile';
import StoreContext from '../../StoreContext';
import MyPosts from './MyPosts';
import Post from './Post/Post';

const MyPostsContainer = () => {






    return (
        <StoreContext.Consumer>  
            {(store) => {

                let onPostChange = (text) => {
                    store.dispatch(onPostChangeAction(text));
                }

                let addPost = () => {
                    store.dispatch(addPostAction());
                }

                return <MyPosts onPostChange={onPostChange} addPost={addPost} state={store.getState()} />
            }
        }

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;