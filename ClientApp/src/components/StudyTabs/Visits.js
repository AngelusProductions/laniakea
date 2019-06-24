import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Visits = props => {
    return (
        <div>
            Visits
        </div>
    )
}

export default withRouter(connect()(Visits))