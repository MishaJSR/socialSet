import *  as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import UsersItem from './Users_Item/UsersItem';


const Users = (props) => {

  // let usersElements = props.users.map(
  //   uElement =>
  //     <div className={classes.users_Item}>

  //       <img className={classes.imgUser} src={uElement.img_source} />
  //       <div>
  //         <button>ene</button>
  //       </div>
  //       <div className={classes.name}>
  //         <span className={classes.spanUser}>{uElement.name}</span>
  //       </div>
  //       <div className={classes.name}>
  //         <span className={classes.spanUser}>{uElement.status}</span>
  //       </div>
  //       <div className={classes.name}>

  //       </div>
  //     </div>
  // )
  // let usersElements = (dataU) => dataU.map (uElement => <UsersItem onFollow={props.onFollow} unFollow={props.unFollow} name={uElement.name} id={uElement.id} uFriend={uElement.friend} uStatus={uElement.status} uCity={uElement.location.city} uCountry={uElement.location.country} img_source={uElement.src} />)
 
  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => props.setUsers(response.data.items));
}
debugger;

  return (
    <div>
      {
        props.users.map(uElement =>
          <div key={uElement.id}>
            <span>
              <div>
                {/* <img src={uElement.src} /> */}
              </div>
              <div>
                {uElement.followed ?
                  <button onClick={() => props.unFollow(uElement.id)}>Unfollow</button> :
                  <button onClick={() => props.onFollow(uElement.id)}>Follow</button>}
              </div>
            </span>

            <span>
              <div>{uElement.name}</div>
            </span>
            <span>
              {/* <div>{uElement.location.city}, {uElement.location.country} , {uElement.status} </div> */}
              <div>{uElement.status} </div>
            </span>
          </div>
        )
      }
    </div >
  );
}



export default Users;