import React from 'react';
import classes from './Users.module.css';
import UsersItem from './Users_Item/UsersItem';

let usersElements;

const Users = (props) => {


  let showU = () => {
    props.onShowUsers();
    usersElements =
      props.stateU.usersPage.map(uElement => <UsersItem name={uElement.name} id={uElement.id} />)
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