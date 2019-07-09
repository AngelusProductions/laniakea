import React, {Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators } from '../../store/Studies'
import * as SubTabs from './SubTabs/index'
import '../../css/study-tabs/sites.css'

class Sites extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedSiteId: null, selectedSubjectId: null, selectedVisitId: null, selectedFormId: null }
    }

    componentDidMount() {
        this.props.requestSites(this.props.state.studies.currentStudyId)
        this.props.requestSubjects(this.state.selectedSiteId)
    }

    onSiteClick(e) {
        this.props.requestSubjects(Number(e.target.id))
        const siteId = this.state.selectedSiteId === null || this.state.selectedSiteId !== Number(e.target.id) ? Number(e.target.id) : null
        this.setState({ selectedSiteId: siteId, selectedSubjectId: null, selectedVisitId: null, selectedFormId: null })
    }

    onSubjectClick(e) {
        this.props.requestVisits(Number(e.target.id))
        const subjectId = this.state.selectedSubjectId === null || this.state.selectedSubjectId !== Number(e.target.id) ? Number(e.target.id) : null
        this.setState({ selectedSubjectId: subjectId, selectedVisitId: null, selectedFormId: null })
    }

    onVisitClick(e) {
        this.props.requestForms(Number(e.target.id))
        const visitId = this.state.selectedVisitId === null || this.state.selectedVisitId !== Number(e.target.id) ? Number(e.target.id) : null
        this.setState({ selectedVisitId: visitId, selectedFormId: null })
    }

    onFormClick(e) {
        this.props.requestSubjectVisitForm(this.state.selectedSubjectId, this.state.selectedVisitId, Number(e.target.id))
        this.setState({ selectedFormId: Number(e.target.id) })
    }

    render() {
        let sitesData = []
        if ('sites' in this.props.state.studies) {
            sitesData = this.props.state.studies.sites.map(function (site) {
                const json = { site: site, subjects: [] }
                const isMatch = this.state.selectedSiteId === site.id
                if (isMatch) { json.subjects = this.props.state.studies.subjects }
                return json
            }, this)
        }

        const tree = sitesData.map(branch => {
            if (branch.subjects.length > 0) {
                const subjectList = branch.subjects.map(function (subject) {
                    let visitList = []
                    if (this.state.selectedSubjectId === subject.id) {
                        visitList = this.props.state.studies.visits.map(function (visit) {
                            let formList
                            if (this.state.selectedVisitId === visit.id) {
                                formList = this.props.state.studies.forms.map(function(form) {
                                    return <li className="form-name" id={form.id} key={form.id} onClick={this.onFormClick.bind(this)}>{form.name}</li>
                                }, this)
                            }
                            const visitKey = `${visit.id}-${visit.name}`
                            const formsHeader = this.state.selectedVisitId === visit.id 
                                ? <div id="formsHeader">
                                    <img className="right-arrow-icon" id="formsArrow" src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c43d.png" alt="open" />
                                        Forms:
                                    </div> : ''
                            const classTitle = this.state.selectedVisitId === visit.id
                                ? 'visit-name selected' : 'visit-name'
                            const dropdownLogo = this.state.selectedVisitId === visit.id
                                ? <img src="https://png.pngtree.com/svg/20160608/drop_down_667085.png" className="tree-icon" alt="open" /> : ''
                            return (
                                <div className="visit-expanded" key={visitKey}>
                                    <li className={classTitle} id={visit.id}
                                        onClick={this.onVisitClick.bind(this)}>
                                        {visit.name}
                                        {dropdownLogo}
                                    </li>
                                    {formsHeader}
                                    <ul id="formList">{formList}</ul>
                                </div>
                            )
                                
                        }, this)
                    }
                    const subjectKey = `${subject.id}-${subject.name}`
                    const visitsHeader = this.state.selectedSubjectId === subject.id 
                        ? <div id="visitsHeader">
                              <img className="right-arrow-icon" id="visitsArrow" src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c43d.png" alt="open" />
                            Visits:
                        </div> : ''
                    const classTitle = this.state.selectedSubjectId === subject.id 
                        ? 'subject-name selected' : 'subject-name'
                    const dropdownLogo = this.state.selectedSubjectId === subject.id 
                        ? <img src="https://png.pngtree.com/svg/20160608/drop_down_667085.png" className="tree-icon" alt="open" /> : ''
                    return (
                        <div className="subject-expanded" key={subjectKey}>
                            <li className={classTitle} id={subject.id}
                                onClick={this.onSubjectClick.bind(this)}>
                                {subject.name}
                                {dropdownLogo}
                            </li>
                            {visitsHeader}
                            <ul id="visitList">{visitList}</ul>
                        </div>
                    )
                }, this)
                const siteKey = `${branch.site.id}-${branch.site.name}`
                const subjectsHeader = this.state.selectedSiteId === branch.site.id
                    ? <div id="subjectsHeader">
                        <img className="right-arrow-icon" id="subjectsArrow" src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c43d.png" alt="open" />
                            Subjects:
                        </div> : ''
                const classTitle = this.state.selectedSiteId === branch.site.id
                    ? 'site-name selected' : 'site-name'
                return (
                    <div className="site-expanded" key={siteKey}>
                        <div className={classTitle} title={branch.site.name}
                            onClick={this.onSiteClick.bind(this)} id={branch.site.id}>
                            {branch.site.name}
                            <img src="https://png.pngtree.com/svg/20160608/drop_down_667085.png" className="tree-icon" alt="open" />
                        </div>
                        {subjectsHeader}
                        <ul className="site-subjects">{subjectList}</ul>                    </div>
                )
            } else {
                const siteKey = `${branch.site.id}-${branch.site.name}`
                return <div className="site-name" title={branch.site.name} key={siteKey}
                    onClick={this.onSiteClick.bind(this)} id={branch.site.id}>{branch.site.name}</div>
            }
        })
        const formInfo = this.state.selectedFormId === null ? '' : <SubTabs.FormInfo form={this.props.state.studies.form} />
        const loadingGif = this.props.state.studies.isLoading ? <img src="https://ness-production.s3.amazonaws.com/NESSLogo.gif" id="loadingGif" alt="ness" /> : ''
        return (
            <div id="sitesPageWrapper">
                <img id="sitesPageLogo" src="https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/JeZOvAFg.png?itok=-0oExdT9" alt="sites" />
                <div id="sitesHeader">Select a site:</div>
                {loadingGif}
                {tree}
                {formInfo}
            </div>
        )
    }
}

export default withRouter(connect(
    state => {
        const { studies, subTabs } = state
        return { state: { studies, subTabs } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Sites))