import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../store/SubTabs'
import '../css/landing-page.css'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render() {
        const sidebarStatus = this.props.sidebarShow ? "open" : "closed"
        return (
            <div id="landingPageWrapper" className={sidebarStatus}>
                <img id="laniakeaBackground" src="https://format-com-cld-res.cloudinary.com/image/private/s--VjBEvS5y--/c_crop,h_2874,w_4125,x_0,y_0/c_fill,g_center,h_264,w_380/a_auto,fl_keep_iptc.progressive.apng/v1/f674accf01dbd05c3c3575bac6d159f9/wwswwr-shapes-03.png" alt="supercluster" />
                <h1 id="laniakeaTitle">laniakea</h1>
            </div>
        )
    }
}

export default withRouter(connect(
    state => state.subTabs,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LandingPage))

    //< p id = "laniakeaSubtitle" > ness's internal website</p>
    //< img src = "https://ness-production.s3.amazonaws.com/NESSLogo.gif" id = "logo-landing-page" alt = "ness" />