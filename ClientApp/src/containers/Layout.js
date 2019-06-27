import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Studies'
import '../css/layout.css'
import '../css/global.css'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import LandingPage from '../components/LandingPage'
import ContentContainer from './ContentContainer'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const url = this.props.location.pathname.split('/')[1]
        const page = (function(path) {
            switch (path) {
                case '':
                    return <LandingPage />
                case 'studies':
                    return <ContentContainer />
            }
        })(url)
        return (
            <div id="layoutGrid" className="normalize">
                <Topbar />
                <div id="pageWrapper">
                    <Sidebar />
                    {page}
                    <div id="footerWrapper">
                        footer
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Layout))