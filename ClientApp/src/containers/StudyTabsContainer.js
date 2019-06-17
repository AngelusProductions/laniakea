import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../css/study-tabs.css'

class StudyTabsContainer extends Component {

    render() {
        const headers = {
            'Overview': [<Overview />, '/overview'],
            'Forms': [<Forms />, '/forms'],
            'Visits': [<Visits />, '/visits'],
            'Sites': [<Sites />, '/sites'],
            'Devices': [<Devices />, '/devices'],
            'Users': [<Users />, '/users'],
            'Data': [<Data />, '/data'],
            'Documents': [<Documents />, '/documents'],
            'Notes': [<Overview />, '/notes'],
            'Automation': [<Overview />, '/automation']
        }

        const tabComponents = Object.keys(headers).map( header => {
            const url = headers[header]
            const id = `tab-${url.substring(1,)}`
            const key = header
            return (
                <li className="study-tab" id={id} key={key}>
                    <Link to={url}>
                        {header}
                    </Link>
                </li>
            )
        })
      
        return (
            <ul id="studyTabsWrapper">
                {tabComponents}
            </ul>
        )
    }
}

export default withRouter(connect()(StudyTabsContainer))