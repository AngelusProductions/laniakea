import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actionCreators } from '../store/Studies'

import '../css/study.css'

class Study extends Component {
    constructor(props) {
        super(props);
        this.state = {
            study: {}
        }
    }

    componentWillMount() { this.props.requestStudy(this.props.match.params.id) }

    render() {
        let study
        if (Object.keys(this.state.study).length > 0) {
            study =
                <React.Fragment>
                    <h1 className="study-page-title">{this.state.study.name}</h1>
                    <img className="study-page-logo" src={this.state.study.logo} alt={this.state.study.name} />
                </React.Fragment>
            debugger

        }
        return (
            <div className="study-wrapper">
                {study}
            </div>
        );
    }
};


export default connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Study)
