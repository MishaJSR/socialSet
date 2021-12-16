import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts_container';

const Profile = (props) => {
    return (
        <div>
        <div>
        <img src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg'></img>
        </div>
        <div>
        ava+descr
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT526WS19R_mmRsVD9r_ZSaUJQ7KCCvBGkthQ&usqp=CAU'></img>
        </div>
        <MyPostsContainer store = {props.store}/>
        
      </div>
    );
    debugger;
}

export default Profile;