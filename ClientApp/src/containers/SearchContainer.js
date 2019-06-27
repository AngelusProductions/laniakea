import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as Searchers from '../components/Searchers/index'
import '../css/searches.css'

const SearchContainer = props => {
    const urlArray = props.location.pathname.split('/')
    const page = (function (path) {
        switch (path) {
            case 'search/quick/results':
                    return <Searchers.QuickResults />
            case 'search/advanced':
                return <Searchers.AdvancedSearch />
            case 'search/advanced/results':
                return <Searchers.AdvancedResults />
        }
    })(urlArray.filter(i => i.length > 0).join('/'))
    return (<div id="searchContainerWrapper">{page}</div>)
}

export default withRouter(connect()(SearchContainer))