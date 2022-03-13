import *  as axios from 'axios';
import React from 'react';
import Preloader from './Preloader/Preloader';
import Users from './Users';
import classes from './Users.module.css';
import { clickPage, isFethingBut, onFollow, unFollow, onShowUsers, swapSlice, setUsers, setCountUsers, isToggleButton, getUserThunk, swapPageThunk, onFollowThunk, unFollowThunk } from '../../redux/reduserUsers';
import { connect } from 'react-redux';
import { getUserAxi, onFollowAxi, unFollowAxi } from '../../scripts/auth';


class UsersAPI extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUserThunk(this.props.pageSize, this.props.currentPage)
    }
  }

  swapPage = (currentPage) => {
    this.props.swapPageThunk(this.props.pageSize, currentPage)
  }

  onFollowBut = (id) => {
    this.props.onFollowThunk(id)
    }

  unFollowBut = (id) => {
    this.props.unFollowThunk(id)
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
      swapSlice, isFethingBut, isToggleButton,
      getUserThunk, swapPageThunk, onFollowThunk,
      unFollowThunk}) (UsersAPI);;