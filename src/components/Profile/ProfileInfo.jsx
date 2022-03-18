import React from 'react';
import Preloader from '../Users/Preloader/Preloader';
import defaultImg from '../Users/Preloader/userph.png'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.userData){
        return <Preloader/>    
    }
    return (
        <div>
        <div>
        <img src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg'></img>
        </div>
        <div>
        <img src={(props.userData.photos.small == null)? defaultImg :  props.userData.photos.small}></img>
        <div></div>

          
          {props.userData.fullName}
          <div><ProfileStatus status={props.status}/></div>
          
        </div>
        </div>
    );
}

export default ProfileInfo