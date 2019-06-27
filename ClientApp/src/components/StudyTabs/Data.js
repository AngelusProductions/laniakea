import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as Searchers from '../Searchers/index'
import '../../css/study-tabs/data.css'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div id="dataPageWrapper">
                <Searchers.AdvancedSearch />
            </div>
        )
    }
}

export default withRouter(connect()(Data))