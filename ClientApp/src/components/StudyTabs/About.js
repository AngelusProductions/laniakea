import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class About extends Component {

    render() {
        const study = this.props.study
        return (
            <React.Fragment>
                About
            </React.Fragment>
        )
    }
} 

export default withRouter(connect()(About))


    //< ul id = "studyShowDetails" >
    //<li>
    //        <span className="study-detail-label">Sponsor: </span>
    //        <span className="study-detail-datum">{study.sponsor}</span>
    //    </li>
    //<li>
    //<span className="study-detail-label">Server: </span>
    //<span className="study-detail-datum">{study.server}</span>
    //</li>
    //<li>
    //        <span className="study-detail-label">Database: </span>
    //        <span className="study-detail-datum">{study.databaseName}</span>
    //    </li>
    //<li>
    //<span className="study-detail-label">Protocol: </span>
    //<span className="study-detail-datum">{study.protocol}</span>
    //</li>
    //</ul >