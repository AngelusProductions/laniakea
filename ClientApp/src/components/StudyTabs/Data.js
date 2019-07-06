import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../../store/Studies'

import * as Searchers from '../Searchers/index'
import '../../css/study-tabs/data.css'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: 0 }
    }
    render() {
        return (
			<div id="dataPageWrapper">
				<Searchers.AdvancedSearch currentStudyId={this.props.currentStudyId} />
            </div>
        )
    }
}

export default withRouter(connect(
	state => state.studies,
	dispatch => bindActionCreators(actionCreators, dispatch)
)(Data))
