import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Users'

import LogIn from '../components/LogIn'
import LogOut from '../components/LogOut'
import UserInfo from '../components/UserInfo'
import '../css/account.css'

class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let log
        if (this.props.currentUser == null) { log = this.props.logShowing ? <LogIn /> : '' }
        else { log = this.props.logShowing ? <LogOut /> : '' }
        return (
            <React.Fragment>
                <UserInfo />
                {log}
            </React.Fragment> 
        )
    }
}

export default withRouter(connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Account))
