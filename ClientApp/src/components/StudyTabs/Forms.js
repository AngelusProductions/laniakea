import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store/Studies'
import '../../css/study-tabs/forms.css'

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    componentDidMount() { this.props.requestFormsFromStudy(this.props.state.studies.currentStudyId)}

    render() {
        const formNames = 'forms' in this.props.state.studies ? this.props.state.studies.forms.map(form => {
            return (<div className="forms-page-form-name" key={form.id}> {form.name}</div>)}) : []
        return (
            <div id="formsPageWrapper">
                <img id="formsPageLogo" src="https://png.pngtree.com/svg/20170503/5aad6d8b9c.png" alt="forms" />
                <h1 id="formsPageHeader">Forms</h1>
                <div id="formsList">{formNames}</div>
            </div>
        )
    }
}

    
export default withRouter(connect(
    state => {
        const { studies, io } = state
        return { state: { studies, io } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Forms))