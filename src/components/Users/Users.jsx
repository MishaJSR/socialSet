import React from 'react';
import classes from './Users.module.css';
import UsersItem from './Users_Item/UsersItem';

let usersElements;

const Users = (props) => {


  let showU = () => {
    props.onShowUsers();
    usersElements =
      props.stateU.usersPage.map(uElement => <UsersItem onFollow={props.onFollow} unFollow={props.unFollow} name={uElement.name} id={uElement.id} uFriend={uElement.friend} uStatus={uElement.status} uCity={uElement.location.city} uCountry={uElement.location.country} img_source={uElement.src} />)
  }

  return (
    <div className={classes.pole}>
      <div>
        <button onClick={showU}>Show Users</button>
      </div>
      <div>
        {usersElements}
      </div>
    </div>
  );
}


export default Users;