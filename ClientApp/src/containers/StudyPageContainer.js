import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as StudyTabs from '../components/StudyTabs/index'

import { actionCreators } from '../store/Studies'
import '../css/study.css'
import '../css/logos.css'

class StudyPageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedTab: 0 }
    }

    componentDidMount() {
        this.props.requestStudy(this.props.match.params.id)
        this.props.requestStudyComponents(this.props.match.params.id)
    }

    renderTabs() {
        const headers = {
            'Overview': '/overview', 'Forms': '/forms',
            'Visits': '/visits', 'Sites': '/sites',
            'Devices': '/devices', 'Users': '/users',
            'Data': '/data', 'Documents': '/documents',
            'Notes': '/notes', 'Automation': '/automation'
        }

        let i = 0
        const tabComponents = Object.keys(headers).map(header => {
            //const url = headers[header]
            const id = `tab-${i}`
            i++
            return (
                <li
                    id={id}
                    key={header}
                    className="study-tab"
                    onClick={this.onTabClick.bind(this)}
                >{header}</li>
            )
        })

        return tabComponents
    }

    renderTabContent(t) {
        const components = [
            <StudyTabs.Overview study={this.props.study} studyComponents={this.props.studyComponents} />,
            <StudyTabs.Forms />,
            <StudyTabs.Visits />,
            <StudyTabs.Sites /> ,
            <StudyTabs.Devices />,
            <StudyTabs.Users />,
            <StudyTabs.Data />,
            <StudyTabs.Documents />,
            <StudyTabs.Notes />,
            <StudyTabs.Automation />
        ]
        let i
        !t ? i = this.state.selectedTab : i = t
        return components[i]
    }

    onTabClick(e) {
        const t = Number( e.target.id.substring(e.target.id.length - 1 ))
        this.setState({ selectedTab: t })
        this.renderTabContent.bind(this)(t)
    }

    render() {
        const study = this.props.study
        const tabs = this.renderTabs.bind(this)()
        const content = this.renderTabContent.bind(this)()
        const logoId = `logo${study.id}`
        return (
            <div id="studyPageWrapper" className="normalize">
                <div id="studyMenuWrapper"><img className="study-page-logo" id={logoId} src={study.logo} alt={study.name} /></div>
                <div id="studyTabsWrapper">{tabs}</div>
                <div id="studyTabContentWrapper">{content}</div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(StudyPageContainer))