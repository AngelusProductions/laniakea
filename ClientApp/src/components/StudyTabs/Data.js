import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../../store/SubTabs'
import * as SubTabs from './SubTabs/index'
import '../../css/study-tabs/data.css'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedSubTabId: 0 }
    }

    onSubTabClick(e) { this.props.dataSubTabChange(Number(e.target.id.split('-')[1])) }

    render() {
        const subTabHeaders = ['Quick search', 'Create DVD', 'Advanced']
        const subTabs = subTabHeaders.map(function(header) {
            const index = subTabHeaders.indexOf(header)
            const classTitle = this.props.dataSubTab === index
                ? 'data-sub-tab-header selected-sub-tab'
                : 'data-sub-tab-header'
            return (
                <div
                    className={classTitle}
                    onClick={this.onSubTabClick.bind(this)}
                    id={`dataSubTab-${index}`}
                    key={`dataSubTab-${index}`}
                >
                    {header}
                </div>
            )
        }, this)
        const subTabContent = (function (selectedSubTabId) {
            switch (selectedSubTabId) {
                case 0:
                    return <SubTabs.QuickSearch />
                case 1:
                    return <SubTabs.CreateDVD />
                case 2:
                    return <SubTabs.Advanced />
                default:
                    return <SubTabs.QuickSearch />
            }
        })(this.props.dataSubTab)
        return (
            <div id="dataPageWrapper">
                <div id="dataSubTabMenu">{subTabs}</div>
                {subTabContent}
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.subTabs,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Data))
