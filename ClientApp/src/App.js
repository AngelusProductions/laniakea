import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Account from './components/Account'

import StudiesContainer from './containers/StudiesContainer'
import StudyPageContainer from './containers/StudyPageContainer'
import MasterQueryContainer from './containers/MasterQueryContainer'

export default () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={LandingPage} />

                <Route exact path="/studies" component={StudiesContainer} />

                <Route path="/studies/:id" component={StudyPageContainer} />

                <Route path="/account" component={Account} />

                <Route path="/search" component={MasterQueryContainer} />
            </Switch>
        </Layout>
    </Router>
)
