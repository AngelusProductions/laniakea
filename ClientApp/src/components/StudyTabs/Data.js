import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Data = () => {
    return (
        <div>
            Data
        </div>
    )
}

export default withRouter(connect()(Data))