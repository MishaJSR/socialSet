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
  let usersElements = (dataU) => dataU.map (uElement => <UsersItem onFollow={props.onFollow} unFollow={props.unFollow} name={uElement.name} id={uElement.id} uFriend={uElement.friend} uStatus={uElement.status} uCity={uElement.location.city} uCountry={uElement.location.country} img_source={uElement.src} />)


  return (
    <div className={classes.pole}>
      <div>
        <button>Show Users</button>
      </div>
      <div>
        {usersElements(props.users)}
      </div>
    </div>
  );
  debugger
}



export default Users;