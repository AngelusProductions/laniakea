import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import QueryComposer from './QueryComposer'
import AdvancedSearch from './AdvancedSearch'
import { actionCreators } from '../../store/Searches'
import '../../css/searches.css'

class QuickSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: "",
            showQueryComposer: false
        }
    }

    onFieldChange(e) { this.setState( { field: e.target.value } ) }
    onFieldSubmit(e) {
        e.preventDefault()
        this.props.masterSearchRequest ( e.target.value )
    }
    onComposerClick() { this.setState( { showSearchComposer: !this.state.showSearchComposer } ) }
    onAdvancedSearchClick() { }

    render() {
        const queryComposer = this.state.showSearchComposer ? <QueryComposer /> : ""
        return (
            <div id="quickSearchWrapper">
                <input
                    type="text"
                    id="quickSearchField"
                    name="quickSearchField"
                    placeholder="quick search"
                    onChange={this.onFieldChange.bind(this)}
                    onSubmit={this.onFieldSubmit.bind(this)}
                />
                <button
                    type = "submit"
                    id = "quickSearchButton"
                    name="quickSearchButton"
                    onClick={this.onFieldSubmit.bind(this)}
                >go</button>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.searches,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(QuickSearch))

    //< div id = "toolbarQueryComposerLink" onClick = { this.onComposerClick.bind(this) } > query composer</div >


//    < button
//type = "submit"
//id = "quickSearchButton"
//name = "quickSearchButton"
//onClick = { this.onFieldSubmit.bind(this) }
//    > quick search</button >