
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import TreeViewMenu from 'react-simple-tree-menu'

import { actionCreators as studiesActions} from '../store/Studies'
import { actionCreators as subTabsActions} from '../store/SubTabs'
import '../css/tree.css'

class Tree extends Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }
    }

    componentDidMount() {
        if (this.props.location.pathname === '/') {
            this.props.actions.studiesActions.requestStudies()
        } else {
            this.props.actions.studiesActions.requestStudy(this.props.currentStudyId)
            this.props.actions.studiesActions.requestStudyComponents(this.props.currentStudyId)
        }
    }

    onStudyClick(e) {
        const studyId = e.key.split('-')[1]
        this.props.actions.subTabsActions.setSidebarShow(false)
        this.props.history.push(`/studies/${studyId}`)
        this.props.actions.studiesActions.setCurrentStudy(studyId)
    }

    render() {
        let treeData
        const url = this.props.location.pathname;
        if (url === '/') {
            treeData = this.props.state.studies.studies.map(study => {
                return (
                    {
                        key: `study-${study.id}`,
                        label: `${study.name}`
                    }
                )
            })
        } else {
            treeData = this.props.state.studies.studyComponents.map(component => {
                return (
                    {
                        key: `component-${component.id}`,
                        label: `${component.name}`,
                        nodes: [
                            {
                                key: `guid-${component.guid}`,
                                label: `guid: ${component.guid}`
                            },
                            {
                                key: `training-site-code-${component.trainingSiteCode}`,
                                label: `training site: ${component.trainingSiteQuery}`
                            }, {
                                key: `ness-site-code-${component.nessSiteCode}`,
                                label: `ness site: ${component.nessSiteCode}`
                            },
                            {
                                key: `production-site-code-${component.productionSiteCode}`,
                                label: `production site: ${component.productionSiteCode}`
                            }
                        ]
                    }
                )
            })
        }
            

        return (
            <div id="treeWrapper">
                <TreeViewMenu
                    id={"tree"}
                    data={treeData}
                    onClickItem={this.onStudyClick.bind(this)}
                />
            </div>
        );
    }
};

export default withRouter(connect(
    state => {
        const { studies, subTabs } = state
        return { state: { studies, subTabs } }
    },
    dispatch => {
        return {
            actions: {
                studiesActions: bindActionCreators(studiesActions, dispatch),
                subTabsActions: bindActionCreators(subTabsActions, dispatch)
            }
        }
    }
)(Tree))

