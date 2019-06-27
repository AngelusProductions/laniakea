import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Studies'
import '../css/tab-menu.css'

class TabMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    renderTabs() {
        const headers = {
            'About': '/about',       'Forms': '/forms',
            'Visits': '/visits',     'Sites': '/sites',
            'Devices': '/devices',   'Users': '/users',
            'Data': '/data',         'Docs': '/docs',
            'Notes': '/notes',       'Auto': '/Auto'
        }
        let i = 0
        const tabComponents = Object.keys(headers).map(function(header) {
            const classType = this.props.currentStudyTab === i ? 'tab selected-tab' : 'tab'
            const id = `tab${i}`
            i++
            return (
                <div
                    id={id}
                    key={header}
                    className={classType}
                    onClick={this.props.onTabClick.bind(this)}
                > {header}
                </div>
            )
        }, this)
        return tabComponents
    }
    
    render() {
        return (
            <div id="tabMenuWrapper">
                {this.renderTabs.bind(this)()}
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(TabMenu))