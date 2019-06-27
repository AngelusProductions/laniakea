import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Auto = props => {
    return (
        <div>
            Auto
        </div>
    )
}

export default withRouter(connect()(Auto))