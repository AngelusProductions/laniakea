import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../../store/Studies'
import '../../css/study-tabs/sub-tabs/about.css'

class About extends Component {

    componentDidMount() { this.props.requestStudy(this.props.currentStudyId) }

    render() {
        const study = this.props.study
        return (
            <div id= "aboutWrapper">
                <div id="aboutLogoWrapper" />
                <img id="aboutLogo" src={study.logo} alt="logo" />
                <ul id="studyShowDetails">
                    <li>
                        <span className="study-detail-label">Sponsor: </span>
                        <span className="study-detail-datum">{study.sponsor}</span>
                    </li>
                    <li>
                        <span className="study-detail-label">Server: </span>
                        <span className="study-detail-datum">{study.server}</span>
                    </li>
                    <li>
                        <span className="study-detail-label">Database: </span>
                        <span className="study-detail-datum">{study.databaseName}</span>
                    </li>
                    <li>
                        <span className="study-detail-label">Protocol: </span>
                        <span className="study-detail-datum">{study.protocol}</span>
                    </li>
                </ul>
            </div>
        )
    }
} 

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(About))
