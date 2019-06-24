import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Automation = props => {
    return (
        <div>
            Automation
        </div>
    )
}

export default withRouter(connect()(Automation))