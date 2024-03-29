﻿
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TabMenu from './TabMenu'
import * as StudyTabs from '../components/StudyTabs/index'
import { actionCreators } from '../store/Studies'
import '../css/content-container.css'

class ContentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedTab: 0 }
    }

    componentDidMount() {
        this.props.requestStudy(this.props.state.studies.currentStudyId)
        this.props.requestStudyComponents(this.props.state.studies.currentStudyId)
    }

    renderTabContent(t) {
        const components = [
            <StudyTabs.About study={this.props.study} studyComponents={this.props.studyComponents} />,
            <StudyTabs.Forms />,
            <StudyTabs.Visits />,
            <StudyTabs.Sites />,
            <StudyTabs.Devices />,
            <StudyTabs.Users />,
            <StudyTabs.Data />,
            <StudyTabs.Docs />,
            <StudyTabs.Notes />,
            <StudyTabs.Auto />
        ]
        let i
        !t ? i = this.props.state.studies.currentStudyTab : i = t
        //debugger
        return components[i]
    }

    onTabClick(e) {
        const t = Number(e.target.id.substring(e.target.id.length - 1))
        debugger
        this.setState({ selectedTab: t })
        this.props.currentStudyTabChange(t)
        this.renderTabContent.bind(this)(t)
    }

    render() {
        const content = this.renderTabContent.bind(this)()
        const sidebarStatus = this.props.state.subTabs.sidebarShow ? "open" : "closed"
       return (
            <div id="contentContainerWrapper" className={sidebarStatus}>
                <TabMenu onTabClick={this.onTabClick.bind(this)} />
                <div id="contentWrapper">{content}</div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => {
        const { studies, users, subTabs } = state
        return { state: { studies, users, subTabs } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ContentContainer))