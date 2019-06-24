import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PlusButton, CloseButton } from 'react-svg-buttons'
import { actionCreators } from '../store/Queries'
import '../css/master-query.css'

class QueryComposer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            includeList: [],
            excludeList: []
        }
    }

    onIncludeSubmit(e) {
        e.preventDefault()
        this.setState({
            includeList: this.state.includeList.push(e.target.value),
            query: this.state.query.concat(` ${e.target.value}`)
        })
    }

    onExcludeSubmit(e) {
        e.preventDefault()
        this.setState({
            excludeList: this.state.excludeList.push(e.target.value),
            query: this.state.query.concat(` -${e.target.value}`)
        })
    }

    onQuerySubmit(e) { this.props.masterQueryRequest ( this.state.query ) }

    renderButton(id, color) {
        switch (id) {
            case "includeButton": return ( <PlusButton  id={id} type="plus" size={50} color={color} thickness={5} className="add-button" /> )
            case "excludeButton": return ( <CloseButton id={id} type="plus" size={50} color={color} thickness={5} className="add-button" /> )
            default: break;
        }
    }

    render() {
        let includeList
        if (this.state.includeList.length > 0) {
            includeList = this.state.includeList.map(string => {
                return (<li className="include-string">{string}</li>)
            })
        }
        let excludeList
        if (this.state.excludeList.length > 0) {
            excludeList = this.state.excludeList.map(string => {
                return (<li className="exclude-string">{string}</li>)
            })
        }

        return (
            <div id="queryComposerWrapper">
                <div id="queryComposerTitle">Query Composer</div>
                <div id="queryComposerString">{this.state.query}</div>
                <div id="queryParametersWrapper">
                    <div id="queryIncludeWrapper">
                        <input type="text" id="includeInput" className="parameter-input" onSubmit={this.onIncludeSubmit.bind(this)}/>
                        <ul id="queryIncludeList" className="parameter-list">{includeList}</ul>
                        <div className="parameter-button">{this.renderButton.bind(this)("includeButton", "#007BFF")}</div>
                    </div>
                    <div id="queryExcludeWrapper">
                        <input type="text" id="excludeInput" className="parameter-input" onSubmit={this.onExcludeSubmit.bind(this)} />
                        <ul id="queryExcludeList" className="parameter-list">{excludeList}</ul>
                        <div className="parameter-button">{this.renderButton.bind(this)("excludeButton", "#ff005c")}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.queries,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(QueryComposer))