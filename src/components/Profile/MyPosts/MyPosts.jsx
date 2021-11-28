import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


 

const MyPosts = (props) => {
    return (
        <div>
            My Posts
            <div className={classes.post}>
                {props.postData.map (pElement => <Post message={pElement.content} likes_count={pElement.likes_count} />)}
            </div>
        </div>
    );
}

export default MyPosts;