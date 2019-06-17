import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Devices = props => {
    return (
        <div>
            Devices
        </div>
    )
}

export default withRouter(connect()(Devices))