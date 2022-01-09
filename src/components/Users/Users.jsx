import *  as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';


class Users extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => this.props.setUsers(response.data.items));
    }
  }


  render() {
    return (
      <div>
        {
          this.props.users.map(uElement =>
            <div key={uElement.id}>
              <span>
                <div>
                  {/* <img src={uElement.src} /> */}
                </div>
                <div>
                  {uElement.followed ?
                    <button onClick={() => this.props.unFollow(uElement.id)}>Unfollow</button> :
                    <button onClick={() => this.props.onFollow(uElement.id)}>Follow</button>}
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
}

export default Users;