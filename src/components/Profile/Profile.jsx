import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts_container';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
      <div>
      <ProfileInfo userData={props.userData}/>
      <MyPostsContainer store = {props.store}/>
      </div>
    );
    debugger;
}

export default Profile;