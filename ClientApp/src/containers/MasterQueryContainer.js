import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import QueryComposer from '../components/QueryComposer'
import { actionCreators } from '../store/Queries'
import '../css/master-query.css'

class MasterQueryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            showQueryComposer: false
        }
    }

    onQueryChange(e) { this.setState( { query: e.target.value } ) }
    onQuerySubmit(e) { this.props.masterQueryRequest ( e.target.value ) }
    onComposerClick() { this.setState( { showQueryComposer: !this.state.showQueryComposer } ) }

    render() {
        const queryComposer = this.state.showQueryComposer ? <QueryComposer /> : ""
        return (
            <React.Fragment>
                <div id="masterQueryPageWrapper">
                    <input
                        type="text"
                        id="masterQuerySearchBar"
                        name="masterQuerySearchBar"
                        onChange={this.onQueryChange.bind(this)}
                        onSubmit={this.onQuerySubmit.bind(this)}
                    />
                    <button
                        type="submit"
                        id="masterQuerySearchButton"
                        name="masterQuerySearchButton"
                        onClick={this.onQuerySubmit.bind(this)}
                    >search</button>
                    <div id="openQueryComposer" onClick={this.onComposerClick.bind(this)}>query composer</div>
                </div>
                {queryComposer}
            </React.Fragment>
        )
    }
}

export default withRouter(connect(
    state => state.queries,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(MasterQueryContainer))