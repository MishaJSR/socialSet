import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
        <div>
        <img src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg'></img>
        </div>
        <div>
        ava+descr
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT526WS19R_mmRsVD9r_ZSaUJQ7KCCvBGkthQ&usqp=CAU'></img>
        </div>
        <div className={classes.post}>
          My Posts
            <div className={classes.item}>New Post</div>
            <div>
              <div className={classes.item}>Post1</div>
              <div className={classes.item}>Post2</div>
              <div className={classes.item}>Post3</div>
            </div>
        </div>
      </div>
    );
}

export default Profile;