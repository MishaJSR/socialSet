import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function likes_counter (lcount){
    return lcount+21;
}

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div className={classes.post}>
                <Post message='How are you?' likes_count={likes_counter(20)}/>
                <Post message='Its my new post'/>
                <Post message='I am Andy'/>
                <Post message='I am Peter'/>
            </div>
        </div>
    );
}

export default MyPosts;