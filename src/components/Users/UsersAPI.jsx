import *  as axios from 'axios';
import React from 'react';
import Preloader from './Preloader/Preloader';
import Users from './Users';
import classes from './Users.module.css';

class UsersAPI extends React.Component {


  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.isFethingBut(true);

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
          this.props.isFethingBut(false);
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
    this.props.isFethingBut(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${E}`)
      .then(response => {
        this.props.isFethingBut(false);
        this.props.setUsers(response.data.items)
      });
  }

  render() {


    return <>
    {this.props.isFething ? <Preloader/> : null}
    <Users
      totC={this.props.totalUsersCount}
      pZ={this.props.pageSize}
      rB={this.props.isReversBut}
      eP={this.props.endPage}
      sP={this.props.startPage}
      swapS={this.props.swapSlice}
      swP={this.swapPage}
      curP={this.props.currentPage}
      unF={this.props.unFollow}
      onF={this.props.onFollow}
      usr={this.props.users}
      isF={this.props.isFething}
    />;
    </>
  }
}




export default UsersAPI;