import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Advanced = props => {
    return (
        <div>
            Advanced
        </div>
    )
}

export default withRouter(connect()(Advanced))