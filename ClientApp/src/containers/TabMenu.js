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
        //this.setCurrentStudyTab = this.setCurrentStudyTab.bind(this)
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
            const divId = `tab${i}`
            let icon = ''
            if (i === 0) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png" /> }
            if (i === 1) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://static.thenounproject.com/png/88301-200.png" /> }
            if (i === 2) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://i0.wp.com/getreferralmd.com/wp-content/uploads/2016/09/icon_22912.gif?resize=250%2C250&ssl=1" /> }
            if (i === 3) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://img.icons8.com/pastel-glyph/2x/worldwide-location--v1.png" /> }
            if (i === 4) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://cdn4.iconfinder.com/data/icons/ios7-essence/28/device_laptop_computer_ipad_tablet_devices__3-512.png" /> }
            if (i === 5) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://www.pngrepo.com/png/50138/170/two-male-users-symbol-of-interface.png" /> }
            if (i === 6) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://static.thenounproject.com/png/533103-200.png" /> }
            if (i === 7) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://img.icons8.com/pastel-glyph/420/stack-of-documents.png" /> }
            if (i === 8) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://cdn1.iconfinder.com/data/icons/documents-6/512/right_edit_document-512.png" /> }
            if (i === 9) { icon = <img id={i} className="tab-icon" alt="icon" onClick={this.setCurrentStudyTab.bind(this)} src="https://png.pngtree.com/svg/20161116/automated_mail_123932.png" /> }
            i++
            return (
                <div
                    id={divId}
                    key={header}
                    className={classType}
                > {header}{icon}
                </div>
            )
        }, this)
        return tabComponents
    }

    setCurrentStudyTab(e) { this.props.currentStudyTabChange(Number(e.target.id)) }
    
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