import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router';
import {getHeaderThunk} from '../../redux/reducerAuth';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getHeaderThunk()
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

export default connect (mapStateToProps, { getHeaderThunk}) (withUrlHeader)