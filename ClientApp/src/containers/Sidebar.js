
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Tree from '../components/Tree'
import * as StudyTabs from '../components/StudyTabs/index'
import { actionCreators } from '../store/Studies'
import '../css/sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }


    render() {
        return (
            <div id="sidebarWrapper">
                <Tree />
                <div id="activityWrapper">
                    activity
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Sidebar))