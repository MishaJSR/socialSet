import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://in-dee.ru/upload/iblock/1e1/1e1a7591899693f284f37ef2234b0d99.jpg'></img>
      UserName
      <div>
        <span>{props.message}</span>
      </div>
      <div>
        <button>{props.likes_count} Like</button>
      </div>
    </div>
    
  );
}

export default Post;