import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//import Tree from 'react-animated-tree'

import { actionCreators } from '../../store/Studies'
import '../../css/study-tabs/sites.css'

class Sites extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedSiteId: 59, tree: {} }
    }

    componentDidMount() {
        this.props.requestSites(this.props.currentStudyId)
    }
    
    render() {
        return (
            <div id="sitesPageWrapper">
                Sites
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Sites))

    //< ul id = "sitesList" > { sites }</ul >
                //<Tree.DirectoryTree multiple defaultExpandAll>
                //    <Tree onSelect={this.onTreeSelect.bind(this)}>{this.renderTreeNodes(this.props.sites)}</Tree>
                //</Tree.DirectoryTree>

    //< SpecialTree content = "Orange" >
    //<SpecialTree content="Juice" />
    //</SpecialTree >

//if ('subjects' in this.props) {debugger}
//const treeData = 'sites' in this.props
//    ? this.props.sites.map(site => {
//        const subjects = (async () => {
//            let response = await this.props.requestSubjects(site.id)
//            let user = await response.json();
//            debugger
//        })();
//        const children = this.props.subjects.map(subject => {
//            return (<Tree.TreeNode title={subject.name} key={subject.id}/>)
//        })
//        return <Tree.TreeNode title={site.name} key={site.id} >{children}</Tree.TreeNode>
//    })
//    : ''


//const treeStyles = { color: 'black', fill: 'blueviolet', width: '100%' }
//const typeStyles = { fontSize: '2em', verticalAlign: 'middle' }

//let tree = <Tree content="main" type="ITEM" canHide open style={treeStyles}>
//               <Tree content="hello" type={<span>🙀</span>} canHide />
//               <Tree content="subtree with children" canHide>
//                   <Tree content="hello" />
//                   <Tree content="sub-subtree with children">
//                       <Tree content="child 1" style={{ color: '#63b1de' }} />
//                       <Tree content="child 2" style={{ color: '#63b1de' }} />
//                       <Tree content="child 3" style={{ color: '#63b1de' }} />
//                   </Tree>
//                   <Tree content="hello" />
//               </Tree>
//               <Tree content="hello" canHide />
//               <Tree content="hello" canHide />
//           </Tree>

//let tree, subjects = []
        //if ('sites' in this.props) {
        //    tree = this.props.sites.map(function(site) {
        //        if (this.state.selectedSiteId == site.id) {
        //            this.props.requestSubjects(site.id)
        //            subjects = this.props.subjects.map(subject => {
        //                return (<Tree content={subject.name} key={subject.id} />)
        //            })
        //        } else { subjects = [] }
        //        return <Tree
        //                    content={site.name}
        //                    type="SiTE"
        //                    key={site.id}
        //                    canHide={false}
        //                    style={treeStyles}
        //                    onClick={this.onSiteClick}
        //               >{subjects}</Tree>
        //    }, this)
        //}