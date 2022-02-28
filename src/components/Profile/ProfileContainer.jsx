import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/reduserProfile';
import Profile from './Profile';


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            debugger;
          this.props.setUserData(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} userData={this.props.userData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData
    }
}

export default connect (mapStateToProps, {setUserData}) (ProfileContainer)