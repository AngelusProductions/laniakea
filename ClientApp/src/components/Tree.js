
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import TreeViewMenu from 'react-simple-tree-menu'

import { actionCreators } from '../store/Studies'
import '../css/tree.css'

class Tree extends Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }
    }

    componentDidMount() {
        if (this.props.location.pathname === '/') {
            this.props.requestStudies()
        } else {
            this.props.requestStudy(this.props.currentStudyId)
            this.props.requestStudyComponents(this.props.currentStudyId)
        }
    }

    onStudyClick(e) {
        const studyId = e.key.split('-')[1]
        this.props.history.push(`/studies/${studyId}`)
        this.props.setCurrentStudy(studyId)
    }

    render() {
        let treeData
        const url = this.props.location.pathname;
        if (url === '/') {
            treeData = this.props.studies.map(study => {
                return (
                    {
                        key: `study-${study.id}`,
                        label: `${study.name}`
                    }
                )
            })
        } else {
            treeData = this.props.studyComponents.map(component => {
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
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Tree))

