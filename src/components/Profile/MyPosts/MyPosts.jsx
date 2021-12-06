import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    

    let postElements = 
    props.state.profilePage.postData.map (pElement => <Post message={pElement.content} likes_count={pElement.likes_count} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type:'ADD-POST'});
    }

    let onPostChange = () =>{
        let textOnChange = newPostElement.current.value;
        props.dispatch({ type:'AREA-CHANGE', text: textOnChange});
    }


    return (
        <div>
            My Posts
            <div>
            <textarea name="" ref={newPostElement}  value={props.dispatch({ type:'GET-NEW-POST-TEXT'})} onChange={onPostChange}></textarea>
            
            <button onClick={addPost}>Clicker</button>
            </div>
            
            <div className={classes.post}>
                {postElements}
            </div>

            
        </div>
    );
}

export default MyPosts;