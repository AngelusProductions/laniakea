
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import TreeMenu from 'react-simple-tree-menu'

import { actionCreators } from '../store/Studies'
import '../css/tree.css'

class Tree extends Component {


    //componentWillMount() {
    //    debugger
    //    this.props.requestStudy(this.props.match.params.id)
    //    this.props.requestStudyComponents(this.props.match.params.id)
    //}

    render() {

        const studyComponents = this.props.studyComponents

        const treeData = studyComponents.map(component => {
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
                        },                        {
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

        return (
            <div className="tree-menu-wrapper">
                <TreeMenu
                    data={treeData}
                    id="studyShowTreeMenu"
                />
            </div>
        );
    }
};

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Tree))

