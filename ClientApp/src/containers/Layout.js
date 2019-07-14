import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Studies'
import '../css/layout.css'
import '../css/global.css'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ContentContainer from './ContentContainer'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() { this.props.setIsLoading(false) }

    render() {
        let sidebar = ''
        const url = this.props.location.pathname.split('/')[1]
        const page = (function(path) {
            switch (path) {
                case '':
                default:
                    sidebar = <Sidebar /> 
                    return <LandingPage />
                case 'studies':
                    return <ContentContainer />
            }
        })(url)
        return (
            <div id="layoutGrid" className="normalize">
                <Topbar />
                <div id="pageWrapper">
                    {sidebar}
                    {page}
                    <Footer />
                </div>
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
)(Layout))