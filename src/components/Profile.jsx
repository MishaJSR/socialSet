import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
        <div>
          ava+descr
        <img src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg'></img>
        </div>
        <div>
        ava+descr
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT526WS19R_mmRsVD9r_ZSaUJQ7KCCvBGkthQ&usqp=CAU'></img>
        </div>
        <div>
          My Posts
            <div>New Post</div>
            <div>
              <div>Post1</div>
              <div>Post2</div>
              <div>Post3</div>
            </div>
        </div>
      </div>
    );
}

export default Profile;