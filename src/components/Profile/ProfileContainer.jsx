import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router';
import { getProfileThunk, setUserData } from '../../redux/reduserProfile';
import { getStatusAxi } from '../../scripts/auth';
import { IsAuthHoc } from '../../scripts/hocIsAuth';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        

        this.props.getProfileThunk(userId);
    
    }

    render() {  
             
        return (
            <Profile {...this.props} userData={this.props.userData} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
    }
}

export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
        
            const match = useMatch('/frofile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}

let withUrlProfile = withRouter(IsAuthHoc(ProfileContainer))

export default connect (mapStateToProps, {setUserData, getProfileThunk}) (withUrlProfile)


