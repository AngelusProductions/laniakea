import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Users = props => {
    return (
        <div>
            Users
        </div>
    )
}

export default withRouter(connect()(Users))