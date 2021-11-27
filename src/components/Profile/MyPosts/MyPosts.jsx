import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


let postsData  = [
    {id: 1, content : "How are you?", likes_count : 12},
    {id: 2, content : "Its my new post", likes_count : 92},
    {id: 3, content : "I am Andy", likes_count : 422},
    {id: 4, content : "I am Peter", likes_count : 162}
]

let postElements = postsData.map (pElement => <Post message={pElement.content} likes_count={pElement.likes_count} />)

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div className={classes.post}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;