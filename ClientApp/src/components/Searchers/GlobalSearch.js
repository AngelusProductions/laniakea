import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'

import { actionCreators } from '../../store/Searches'
import '../../css/searches.css'

class GlobalSearch extends Component {
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
        return (
            <div id="globalSearchWrapper">
                <input
                    type="text"
                    id="globalSearchField"
                    name="globalSearchField"
                    placeholder="global search"
                    onChange={this.onFieldChange.bind(this)}
                    onSubmit={this.onFieldSubmit.bind(this)}
                />
                <button
                    type = "submit"
                    id = "globalSearchButton"
                    name="globalSearchButton"
                    onClick={this.onFieldSubmit.bind(this)}
                >go</button>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.searches,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GlobalSearch))