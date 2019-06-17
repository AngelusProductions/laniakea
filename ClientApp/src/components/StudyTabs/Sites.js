import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Sites = props => {
    return (
        <div>
            Sites
        </div>
    )
}

export default withRouter(connect()(Sites))