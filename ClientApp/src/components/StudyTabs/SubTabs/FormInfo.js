import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Tippy from '@tippy.js/react'

import { actionCreators as studiesActions } from '../../../store/Studies'
import { actionCreators as subTabsActions } from '../../../store/SubTabs'
import '../../../css/study-tabs/sub-tabs/form-info.css'

class FormInfo extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    componentDidMount() {
        //const { currentFormId, currentSubjectId, currentSubjectVisitFormId}
        this.props.actions.studiesActions.requestForm(this.props.state.studies.currentFormId)
        this.props.actions.studiesActions.requestAnswers(this.props.state.studies.currentSubjectId, this.props.state.studies.currentVisitId, this.props.state.studies.currentFormId)
    }
    onXClick() { this.props.actions.subTabsActions.setFormInfoShow(false) }

    render() {
        let answersList
        if (this.props.state.studies.answers != undefined) {
            //debugger
            answersList = this.props.state.studies.answers.slice(1).map(
                answer => {
                    return (
                        <div className="form-info-q-a">
                            <div id="formInfoFieldName">{answer.fieldName}</div>
                            <div id="formInfoAnswer">{answer.answerValue}</div>
                        </div>
                    )
                })
        }
        return (
            <div id="formInfoWrapper">
                <div id="formInfoHeader">{this.props.state.studies.form.name}</div>
                <Tippy animation="perspective" theme="translucent" duration={[500, 500]} content="Close form">
                    <img id="closeFormInfoButton" alt="close" src="https://img.icons8.com/clouds/2x/multiply.png" onClick={this.onXClick.bind(this)}/>
                </Tippy>
                <div id="subjectInfoWrapper">
                    <div id="subjectInfoLabel">Subject:</div>
                    <div id="subjectInfoName">{this.props.state.studies.subject.name}</div>
                </div>
                {answersList}
             </div>
        )
    }
}

export default withRouter(connect(
    state => {
        const { studies, subTabs } = state
        return { state: { studies, subTabs } } 
    },
    dispatch => {
        return {
            actions: {
                studiesActions: bindActionCreators(studiesActions, dispatch),
                subTabsActions: bindActionCreators(subTabsActions, dispatch)
            }
        }
    }
)(FormInfo))

