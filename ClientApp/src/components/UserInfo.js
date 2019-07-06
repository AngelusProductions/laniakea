import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Users'
import '../css/account.css'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    

    render() {
        let picUrl, username
        if (this.props.currentUser != null) {
            username = this.props.currentUser.userName
            const picTitle = this.props.currentUser.profilePicturePath.split('\\')[7]
            picUrl = "https://ness-production.s3.amazonaws.com/" + picTitle.slice(0, 15) + ".jpg"
        } else { picUrl = "https://ness-production.s3.amazonaws.com/genericAvatar.png" }
        return (
            <div id="userInfoWrapper" >
                <img id="userPic" alt="user" src={picUrl} />
                <span id="userName">{username}</span>
                <img id="editCrayon" alt="crayon" onClick={this.props.logShow} src="https://ness-production.s3.amazonaws.com/edit.png"/>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserInfo))