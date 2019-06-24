import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Users'

import '../css/account.css'

class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",       
            password: ""
        }
    }

    componentDidMount() { this.props.requestCurrentUser() }
    onUsernameChange(e) { this.setState({ username: e.target.value }) }
    onPasswordChange(e) { this.setState({ password: e.target.value }) }

    onLogInClick(e) {
        e.preventDefault()
        this.props.attemptLogIn(this.state.username, this.state.password)
    }

    render() {

        return (
            <div className = "wrapper fadeInDown" >
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src="https://s3.amazonaws.com/ness-production/NESSLogo.gif" id="icon" alt="ness" />
                    </div>

                    <form>
                        <input onChange={this.onUsernameChange.bind(this)} type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                        <input onChange={this.onPasswordChange.bind(this)} type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input onClick={this.onLogInClick.bind(this)} type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="/account">Forgot Password?</a>
                    </div>

                </div> 
            </div> 
        )
    }
}

export default withRouter(connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Account))
