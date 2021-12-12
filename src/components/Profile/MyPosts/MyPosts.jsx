import React from 'react';
import { addPostAction, onPostChangeAction } from '../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    
debugger;
    let postElements = 
    props.state.profilePage.postData.map (pElement => <Post message={pElement.content} likes_count={pElement.likes_count} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostAction());
    }

    let onPostChange = () =>{
        let textOnChange = newPostElement.current.value;
        props.dispatch(onPostChangeAction(textOnChange));
    }


    return (
        <div>
            My Posts
            <div>
            <textarea name="" ref={newPostElement}  value={props.state.profilePage.newPostText} onChange={onPostChange}></textarea>
            
            <button onClick={addPost}>Clicker</button>
            </div>
            
            <div className={classes.post}>
                {postElements}
            </div>

            
        </div>
    );
}

export default MyPosts;