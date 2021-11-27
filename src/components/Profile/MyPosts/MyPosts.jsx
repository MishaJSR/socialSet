import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


let postsData  = [
    {id: 1, content : "How are you?", likes_count : 12},
    {id: 2, content : "Its my new post", likes_count : 92},
    {id: 3, content : "I am Andy", likes_count : 422},
    {id: 4, content : "I am Peter", likes_count : 162}
]

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div className={classes.post}>
                <Post message={postsData[0].content} likes_count={postsData[0].likes_count}/>
                <Post message={postsData[1].content} likes_count={postsData[1].likes_count}/>
                <Post message={postsData[2].content} likes_count={postsData[2].likes_count}/>
                <Post message={postsData[3].content} likes_count={postsData[3].likes_count}/>
            </div>
        </div>
    );
}

export default MyPosts;