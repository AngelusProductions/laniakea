import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Layout from './containers/Layout'
export default () => (
    <Router>
        <Layout />
    </Router>
)

    //< Switch >
    //<Redirect exact from="/" to="/home" />
    //</Switch >