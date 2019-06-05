import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { PlusButton } from 'react-svg-buttons'

import { actionCreators } from '../store/Studies'

import '../css/study-web.css'

class Study extends Component {
    constructor(props) {
        super(props) 

        this.onSiteClick = this.onSiteClick.bind(this)
    }

    componentWillMount() {
        this.props.requestStudy(this.props.match.params.id)
    }

    onSiteClick(e) {}

    render() {
        let study
        if (Object.keys(this.props.study).length > 0) {
            debugger
            study =
                <React.Fragment>
                    <img className="study-page-logo" src={this.props.study.logo} alt={this.props.study.name} />
                    <p>{this.props.study.protocol}</p>
                </React.Fragment>
        }

        return (
            <div className="study-wrapper">

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
                        <p id="addSiteButtonLabel">add site</p>
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
                        <p id="addSubjectButtonLabel">add subject</p>
                    </div>
                </div>

                {study}
            </div>
        );
    }
};

export default connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Study)

