import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Docs = props => {
    return (
        <div>
            Docs
        </div>
    )
}

export default withRouter(connect()(Docs))