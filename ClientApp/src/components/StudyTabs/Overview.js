import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Tree from '../Tree'

import '../../css/study.css'

class Overview extends Component {

    render() {
        const study = this.props.study
        return (
            <React.Fragment>

                <div id="studyInfoWrapper" className="normalize">
                    <Tree study={study} studyComponents={this.props.studyComponents} />
                </div>

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
            </React.Fragment>
        )
    }
} 

export default withRouter(connect()(Overview))