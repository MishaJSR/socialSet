import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts_container';
import ProfileInfo from './ProfileInfo';
import { Navigate } from 'react-router';


const Profile = (props) => {
  if (props.isAuth == false) return  <Navigate to="/login" />
    return (
      <div>
      <ProfileInfo userData={props.userData}/>
      <MyPostsContainer store = {props.store}/>
      </div>
    );
    debugger;
}

export default Profile;