import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router';
import { getProfileThunk, setUserData } from '../../redux/reduserProfile';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        

        this.props.getProfileThunk(userId);
    
    }

    render() {  
             
        // if (!this.props.isAuth) return  <Navigate to="/login" />
        

        return (
            <Profile {...this.props} userData={this.props.userData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
        isAuth: state.auth.isAuth
    }
}

export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
        debugger
            const match = useMatch('/frofile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}

let withUrlProfile = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserData, getProfileThunk}) (withUrlProfile)