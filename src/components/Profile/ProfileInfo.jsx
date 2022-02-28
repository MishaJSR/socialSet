import React from 'react';
import Preloader from '../Users/Preloader/Preloader';

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
        {props.userData.fullName}
        
          <img src={props.userData.photos.small}></img>
        </div>
        </div>
    );
}

export default ProfileInfo