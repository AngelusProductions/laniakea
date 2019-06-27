﻿import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../../store/Searches'
import '../../css/searches.css'

class AdvancedResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: ""
        }
    }

    render() {
        return (
            <div id="advancedResultsWrapper">advanced results</div>
        )
    }
}

export default withRouter(connect(
    state => state.searches,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AdvancedResults))