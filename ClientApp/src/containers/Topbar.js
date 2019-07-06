import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'

import Account from './Account'
import Hamburger from '../components/Hamburger'
import GlobalSearch from '../components/Searchers/GlobalSearch'

import { actionCreators } from '../store/Users'
import '../css/topbar.css'
import '../css/notifications.css'

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const bell = this.props.currentUser == null ? '' : <img alt="bell" id="notificationBell" src="https://venterview.com/images/v/6.gif" />
        return (
            <div id="topBarWrapper">
                <div id="logoWrapper">
                    <Link to="/">
                        <img id="nessLogo" alt="logo" src="https://ness-production.s3.amazonaws.com/NESS_Logo.PNG" />
                    </Link>
                </div>
                <GlobalSearch />
                <div id="organizersWrapper">
                    {bell}
                </div>
                <Account />
                <div id="burgerMenuWrapper">
                    <Hamburger />
                </div>
            </div>
        );
    }
};

export default withRouter(connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Topbar))