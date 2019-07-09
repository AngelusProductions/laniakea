import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../../../store/Studies'
import '../../../css/study-tabs/sub-tabs/form-info.css'

class FormInfo extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {
        return (
            <div id="formInfoWrapper">
                ben
            </div>
        )
    }
}

export default withRouter(connect(
    state => {
        const { studies, subTabs } = state
        return { state: { studies, subTabs } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FormInfo))