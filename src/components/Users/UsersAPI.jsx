import React from 'react';
import Preloader from './Preloader/Preloader';
import Users from './Users';
import classes from './Users.module.css';
import { swapSlice, getUserThunk, swapPageThunk, onFollowThunk} from '../../redux/reduserUsers';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import {IsAuthHoc} from '../../scripts/hocIsAuth'
import { compose } from 'redux';

class UsersAPI extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUserThunk(this.props.pageSize, this.props.currentPage)
    }
  }

  swapPage = (currentPage) => {
    this.props.swapPageThunk(this.props.pageSize, currentPage)
  }

  onFollowBut = (id, flag) => {
    this.props.onFollowThunk(id, flag)
    }



  render() {

    if (!this.props.isAuth) return  <Navigate to="/login" />
    
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

export default compose(connect (mapStateToProps, { swapSlice, getUserThunk, swapPageThunk, onFollowThunk}),
   IsAuthHoc) 
   (UsersAPI)

