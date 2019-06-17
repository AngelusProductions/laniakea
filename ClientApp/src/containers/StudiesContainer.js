import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { actionCreators } from '../store/Studies'

import '../css/studies.css'

class StudiesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studies: []
        }
    }

    componentDidMount() { this.props.requestStudies() }

    render() {
        let studies
        if (this.props.studies.length > 0) {
            studies =
                <ul>
                    {
                        this.props.studies.map(study => {
                            const studyLink = `/studies/${study.id}`
                            return (
                                <li
                                    id={study.id}
                                    className="study-button"
                                    key={study.id}
                                >
                                    <Link to={studyLink}>
                                        <img src={study.logo} alt={study.name} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                 </ul>
        }
        return (
            <div id="studiesContainer">
                {studies}
            </div>
        );
    }
};

export default withRouter(connect(
    state => state.studies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(StudiesContainer))
