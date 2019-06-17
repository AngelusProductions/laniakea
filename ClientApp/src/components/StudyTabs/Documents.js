import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Documents = props => {
    return (
        <div>
            Documents
        </div>
    )
}

export default withRouter(connect()(Documents))