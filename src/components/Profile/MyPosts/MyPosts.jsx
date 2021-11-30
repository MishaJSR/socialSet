import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

    let postElements = 
    props.postData.map (pElement => <Post message={pElement.content} likes_count={pElement.likes_count} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    }


    return (
        <div>
            My Posts
            <div>
            <textarea name="" ref={newPostElement} cols="30" rows="10"></textarea>
            <button onClick={addPost}>Clicker</button>
            </div>
            
            <div className={classes.post}>
                {postElements}
            </div>

            
        </div>
    );
}

export default MyPosts;