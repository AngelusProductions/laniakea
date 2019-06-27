import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../../store/Searches'
import '../../css/searches.css'

class AdvancedSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            siteField: "",
            subjectField: "",
            visitField: "",
            formField: "",
            fieldField: "",
            answerField: ""
        }
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.masterSearch(this.state)
    }

    onFieldChange(e) { this.setState({ [e.target.name]: e.target.value }) }

    renderSearchFields() {
        const fields = ["site", "subject", "visit", "form", "field", "answer"]
        return fields.map( field => {
            const id = `${field}Search`
            const stateField = `${field}Field`
            const blurPlaceholder = `this.placeholder = ${field}`
            return (
                <input
                    type="text"
                    id={id}
                    key={id}
                    name={stateField}
                    placeholder={field}
                    className="data-search-input"
                    value={this.state[stateField]}
                    onChange={this.onFieldChange.bind(this)}
                    onFocus="this.placeholder = ''"
                    onBlur={blurPlaceholder}
                />
            )
        })
    }
    
    render() {
        return (
            <div id="dataSearchWrapper">
                <img id="quickSearchIcon" src="https://ness-production.s3.amazonaws.com/searchIcon.png" alt="master-search" />
                <div id="quickSearchTitle">
                    Quick search
                </div>
                <div id="dataSearchFieldsWrapper">
                    {this.renderSearchFields.bind(this)()}  
                </div>
                <button 
                    id="dataSearchButton"
                    type="button"
                    onClick={this.onSubmit.bind(this)}
                >go</button>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.searches,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AdvancedSearch))