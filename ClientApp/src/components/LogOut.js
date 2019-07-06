import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Users'

import '../css/account.css'

class LogOut extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() { this.props.requestCurrentUser() }

    onLogOutClick(e) {
        e.preventDefault()
        this.props.logOut()
    }

    logHide() { this.props.logHide() }

    render() {
        return (
            <div className="wrapper fadeInDown" >
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src="https://s3.amazonaws.com/ness-production/NESSLogo.gif" id="icon" alt="ness" />
                    </div>

                    <form>
                        <input onClick={this.onLogOutClick.bind(this)} type="submit" className="fadeIn fourth" value="Log Out" />
                    </form>

                    <button className="log-hide" onClick={this.logHide.bind(this)}>x</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LogOut))
