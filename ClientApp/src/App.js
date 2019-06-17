import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import StudyPageContainer from './containers/StudyPageContainer'
import StudiesContainer from './containers/StudiesContainer'

export default () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={LandingPage} />

                <Route exact path="/studies" component={StudiesContainer} />

                <Route path="/studies/:id" component={StudyPageContainer} />

                <Route path="/users/:id" component={Profile} />

                <Route path="/signin" component={SignIn} />
            </Switch>
        </Layout>
    </Router>
)
