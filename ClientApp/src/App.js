import React from 'react'
import { Route } from 'react-router'

import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import Study from './components/Study'
import StudiesContainer from './containers/StudiesContainer'

export default () => (
    <Layout>
        <Route exact path='/' component={LandingPage} />

        <Route exact path='/studies' component={StudiesContainer} />

        <Route exact path='/studies/:id' component={Study} />

        <Route path='/users/:id' component={Profile} />

        <Route path='/signin' component={SignIn} />
    </Layout>
)
