
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Users'
import '../css/sidebar.css'

class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div id="activityWrapper">
                <img id="spinningIcon" alt="recent activity" src="https://newvitruvian.com/images/spinner-svg-page-loading-2.gif" />
                <div id="recentActivityTitle">Recent activity</div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Activity))