import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router';
import { getProfileThunk, setUserData } from '../../redux/reduserProfile';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        this.props.getProfileThunk(userId);
    
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // .then(response => {
        //     debugger;
        //   this.props.setUserData(response.data);
        // });
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

export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
            const match = useMatch('/frofile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}

let withUrlProfile = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserData, getProfileThunk}) (withUrlProfile)