import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PlusButton } from 'react-svg-buttons'

import Tree from './Tree'
import { actionCreators } from '../store/Studies'
import '../css/study-web.css'

class Study extends Component {

    componentWillMount() {
        this.props.requestStudy(this.props.match.params.id)
        this.props.requestStudyComponents(this.props.match.params.id)
    }

    render() {
        let studyShow, studyComponentsShow
        const study = this.props.study
        //const studyComponents = this.props.studyComponents

        if (Object.keys(study).length > 0) {
            studyShow =
                <React.Fragment>
                    <img className="study-page-logo" src={study.logo} alt={study.name} />
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
        }

        return (
            <div className="study-wrapper">

                <Tree
                    study={this.props.study}
                    studyComponents={this.props.studyComponents}
                />

                <div id="studyButtonsWrapper">
                    <div className="add-site-wrapper">
                        <PlusButton
                            type="plus"
                            size={50}
                            thickness={5}
                            color="#007BFF"
                            className="add-button"
                            id="addSubjectButton"
                            onClick={this.onSiteClick}
                        />
                        <p id="addSiteButtonLabel">site</p>
                    </div>
                    <div className="add-subject-wrapper">
                        <PlusButton
                            type="plus"
                            size={50}
                            thickness={5}
                            color="#8E44AD"
                            className="add-button"
                            id="addSiteButton"
                        />
                        <p id="addSubjectButtonLabel">subject</p>
                    </div>
                </div>

                {studyShow}
                {studyComponentsShow}
            </div>
        );
    }
};

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Study))

