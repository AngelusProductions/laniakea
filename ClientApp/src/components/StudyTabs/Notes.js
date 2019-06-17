import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Notes = props => {
    return (
        <div>
            Notes
        </div>
    )
}

export default withRouter(connect()(Notes))