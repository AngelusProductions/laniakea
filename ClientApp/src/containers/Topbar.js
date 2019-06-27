import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import QuickSearch from '../components/Searchers/QuickSearch'
import '../css/topbar.css'

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div id="topBarWrapper">
                <div id="logoWrapper">
                    <Link to="/">
                        <img id="nessLogo" src="https://ness-production.s3.amazonaws.com/NESS_Logo.PNG" alt="ness" />
                    </Link>
                </div>
                <QuickSearch />
                <div id="organizersWrapper">
                    organizers
                </div>
                <div id="userInfoWrapper">
                    user
                </div>
                <div id="burgerMenuWrapper">
                    burger
                </div>
            </div>
        );
    }
};

export default connect()(Topbar)