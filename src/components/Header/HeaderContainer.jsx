import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router';
import { completedAuth, setUserAuthData } from '../../redux/reducerAuth';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
    
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            debugger
            
            if (response.data.resultCode === 0) {
                this.props.completedAuth();
                this.props.setUserAuthData(response.data.data.id, response.data.data.email, response.data.data.login )
            }
        });
    }

    render() {
        return (
            <Header {...this.props} userAuthData={this.props.userAuthData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userAuthData: state.auth
    }
}

export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
            const match = useMatch('/auth/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}

let withUrlHeader = withRouter(HeaderContainer)

export default connect (mapStateToProps, {setUserAuthData, completedAuth}) (withUrlHeader)