import *  as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';


class Users extends React.Component {


  componentDidMount () {
    if (this.props.users.length === 0) {
      
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setCountUsers(response.data.totalCount)
        });
    }
  }

  // dAjax () {
  //   axios.get("https://social-network.samuraijs.com/api/1.0/users?count=20" + "&page=" + this.props.pageSize)
  //   .then(response => this.props.setUsers(response.data.items));
  // }

  swapPage = (E) => {
    this.props.clickPage(E);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${E}`)
    .then(response => this.props.setUsers(response.data.items));
  }

  render() {

    let pagesCount = this.props.totalUsersCount / this.props.pageSize;

    let pages = [];

    for (let i=1; i < pagesCount+1; i++){
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(Elem =>
            <button onClick={() => {this.swapPage(Elem);}}
             className={(this.props.currentPage === Elem)? classes.selected : ""}>{Elem}</button>
            )
            }
          {/* <button className={classes.selected} >1</button>
          <button >2</button>
          <button >3</button>
          <button >4</button>
          <button >5</button> */}
        </div>
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