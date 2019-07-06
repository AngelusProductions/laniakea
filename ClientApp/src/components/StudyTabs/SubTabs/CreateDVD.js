import React, { Component }from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../store/Exports'
import '../../../css/study-tabs/sub-tabs/create-dvd.css'

class CreateDVD extends Component {
    constructor(props) {
        super(props)
        this.state = { withPHI: true, withTriggers: true }
    }

    onCreateDVDButtonClick(e) {
        this.props.createDVD(this.props.state.studies.currentStudyId,
            this.state.withPHI, this.state.withTriggers)
    }
    onCheckboxChange(e) { this.setState({ [e.target.name]: !this.state[e.target.name] }) }

    render() {
        return (
            <div id="createDVDPageWrapper">

                <img id="dvdIcon" alt="dvd" src="https://www.easydisc.net/images/product_icon/5426_5318_5080_CDContent10_02375119201707_01013502201708.png"/>

                <h1 id="withPHIHeader">With PHI?</h1>
                <label id="withPHICheckbox" >
                    <input type="checkbox" name="withPHI" value="PHI" checked={this.state.withPHI}
                        className="check-custom toggle-switch create-dvd-checkbox "
                        onChange={this.onCheckboxChange.bind(this)} />
                    <span className="check-toggle"></span>
                </label>

                <h1 id="withTriggersHeader">With triggers?</h1>
                <label id="withTriggersCheckbox" >
                    <input type="checkbox" name="withTriggers" value="Triggers" checked={this.state.withTriggers}
                           className="check-custom toggle-switch create-dvd-checkbox "
                           onChange={this.onCheckboxChange.bind(this)} />
                    <span className="check-toggle"></span>
                </label>

                <button type="submit" id="createDVDButton"
                        onClick={this.onCreateDVDButtonClick.bind(this)}>create</button>
                
            </div>
        )

    }
}

export default withRouter(connect(
    state => {
        const { studies, exports } = state
        return { state: { studies, exports } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CreateDVD))