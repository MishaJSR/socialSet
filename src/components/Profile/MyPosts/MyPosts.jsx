import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

    let postElements = 
    props.postData.map (pElement => <Post message={pElement.content} likes_count={pElement.likes_count} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () =>{
        let textOnChange = newPostElement.current.value;
        props.postTextAreaChange (textOnChange);
    }


    return (
        <div>
            My Posts
            <div>
            <textarea name="" ref={newPostElement}  value={props.newPostText} onChange={onPostChange}></textarea>
            
            <button onClick={addPost}>Clicker</button>
            </div>
            
            <div className={classes.post}>
                {postElements}
            </div>

            
        </div>
    );
    {debugger};
}

export default MyPosts;