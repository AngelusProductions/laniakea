import React, { Component }from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../store/IO'
import '../../../css/study-tabs/sub-tabs/create-dvd.css'

class CreateDVD extends Component {
    constructor(props) {
        super(props)
        this.state = { withPHI: null, withoutPHI: null, withTriggers: null, withoutTriggers: null }
    }

    componentDidMount() { this.props.requestDirectoryInfo(this.props.state.studies.study) }

    onCreateDVDButtonClick() {
        this.props.createDVD(this.props.state.studies.study)
    }
    onCheckboxChange(e) { this.setState({ [e.target.name]: !this.state[e.target.name] }) }

    render() {
        const { withPHI, withoutPHI, withTriggers, withoutTriggers } = this.props.state.io.directoryInfo
        if ('directoryInfo' in this.props.state.io && Object.values(this.state).includes(null)) { this.setState({ withPHI, withoutPHI, withTriggers, withoutTriggers }) }
        const loadingGif = this.props.state.io.isLoading ? <img src="https://ness-production.s3.amazonaws.com/NESSLogo.gif" id="loadingGif" alt="ness" /> : ''
        return (
            <div id="createDVDPageWrapper">

                <img id="dvdIcon" alt="dvd" src="https://www.easydisc.net/images/product_icon/5426_5318_5080_CDContent10_02375119201707_01013502201708.png"/>

                <h1 id="withPHIHeader" className="create-dvd-header">With<br/>PHI?</h1>
                <label id="withPHICheckbox" >
                    <input type="checkbox" name="withPHI" value="PHI" checked={withPHI} readOnly={!withPHI}
                        className="check-custom toggle-switch create-dvd-checkbox "
                        onChange={this.onCheckboxChange.bind(this)} />
                    <span className="check-toggle"></span>
                </label>

                <h1 id="withoutPHIHeader" className="create-dvd-header">Without<br/>PHI?</h1>
                <label id="withoutPHICheckbox" >
                    <input type="checkbox" name="withoutPHI" value="withoutPHI" checked={withoutPHI} readOnly={!withoutPHI}
                        className="check-custom toggle-switch create-dvd-checkbox "
                        onChange={this.onCheckboxChange.bind(this)} />
                    <span className="check-toggle"></span>
                </label>

                <h1 id="withTriggersHeader" className="create-dvd-header">With<br/>triggers?</h1>
                <label id="withTriggersCheckbox" >
                    <input type="checkbox" name="withTriggers" value="Triggers" checked={withTriggers} readOnly={!withTriggers}
                           className="check-custom toggle-switch create-dvd-checkbox "
                           onChange={this.onCheckboxChange.bind(this)} />
                    <span className="check-toggle"></span>
                </label>

                <h1 id="withoutTriggersHeader" className="create-dvd-header">Without<br/>triggers?</h1>
                <label id="withoutTriggersCheckbox" >
                    <input type="checkbox" name="withoutTriggers" value="withoutTriggers" checked={withoutTriggers} readOnly={!withTriggers}
                           className="check-custom toggle-switch create-dvd-checkbox "
                           onChange={this.onCheckboxChange.bind(this)} />
                    <span className="check-toggle"></span>
                </label>

                <button type="submit" id="createDVDButton" onClick={this.onCreateDVDButtonClick.bind(this)}>export</button>
                {loadingGif}
            </div>
        )

    }
}

export default withRouter(connect(
    state => {
        const { studies, io } = state
        return { state: { studies, io } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CreateDVD))