import *  as axios from 'axios';
import React from 'react';
import Preloader from './Preloader/Preloader';
import Users from './Users';
import classes from './Users.module.css';
import { clickPage, isFethingBut, onFollow, unFollow, onShowUsers, swapSlice, setUsers, setCountUsers, isToggleButton } from '../../redux/reduserUsers';
import { connect } from 'react-redux';
import { getUserAxi, onFollowAxi, unFollowAxi } from '../../scripts/auth';

class UsersAPI extends React.Component {


  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.isFethingBut(true);

      getUserAxi(this.props.pageSize, this.props.currentPage)
        .then(response => {
          this.props.isFethingBut(false);
          this.props.setUsers(response.data.items);
          this.props.setCountUsers(response.data.totalCount)
        });
    }
  }

  swapPage = (E) => {
    this.props.clickPage(E);
    this.props.isFethingBut(true);
    getUserAxi(this.props.pageSize, E)
      .then(response => {
        this.props.isFethingBut(false);
        this.props.setUsers(response.data.items)
      });
  }

    onFollowBut = (id) => {
      this.props.isToggleButton(true, id)
      onFollowAxi(id).then(response => {
        if (response.data.resultCode == 0)this.props.onFollow(id);
        this.props.isToggleButton(false)
    })
    }

    unFollowBut = (id) => {
      this.props.isToggleButton(true, id)
      unFollowAxi(id).then(response => {
          if (response.data.resultCode == 0)this.props.unFollow(id)
          this.props.isToggleButton(false, null)
      })
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
      unF={this.unFollowBut}
      onF={this.onFollowBut}
      usr={this.props.users}
      isF={this.props.isFething}
      isT={this.props.isToggleBut}
      isTID={this.props.isToggleFollowId}
    />;
    </>
  }
}

let mapStateToProps = (state) => {
  return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      startPage: state.usersPage.startPage,
      endPage: state.usersPage.endPage,
      isReversBut: state.usersPage.reversBut,
      isFething: state.usersPage.isFething,
      isToggleBut: state.usersPage.isToggleBut,
      isToggleFollowId: state.usersPage.isToggleFollowId
  }
}

export default connect (mapStateToProps, 
  {   onShowUsers, onFollow, unFollow,
      setUsers, clickPage, setCountUsers,
      swapSlice, isFethingBut, isToggleButton}) (UsersAPI);;