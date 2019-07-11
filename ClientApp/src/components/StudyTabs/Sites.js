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
        this.props.requestFormsFromVisit(Number(e.target.id))
        const visitId = this.state.selectedVisitId === null || this.state.selectedVisitId !== Number(e.target.id) ? Number(e.target.id) : null
        this.setState({ selectedVisitId: visitId, selectedFormId: null })
    }

    onFormClick(e) {
        this.props.requestAnswers(Number(e.target.id))
        this.props.requestSubjectVisitForm(this.state.selectedSubjectId, this.state.selectedVisitId, Number(e.target.id))
        this.setState({ selectedFormId: Number(e.target.id) })
    }

    render() {
        const treeUrl = "https://png.pngtree.com/svg/20160608/drop_down_667085.png"
        const arrowUrl = "https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c43d.png"
        const sitesLogoUrl = "https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/JeZOvAFg.png?itok=-0oExdT9"
        const loadingUrl = "https://ness-production.s3.amazonaws.com/NESSLogo.gif"
        const { selectedSiteId, selectedSubjectId, selectedVisitId, selectedFormId } = this.state
        const { studies } = this.props.state
        let sitesData = []
        if ('sites' in studies) {  sitesData = studies.sites.map(function(site) {
                                                     const json = { site: site, subjects: [] }
                                                     const isMatch = selectedSiteId === site.id
                                                     if (isMatch) { json.subjects = studies.subjects }
                                                     return json }, this) }
        const tree = sitesData.map(branch => { if (branch.subjects.length > 0) {
            const subjectList = branch.subjects.map(function (subject) { let visitList = []
                        if (selectedSubjectId === subject.id) { visitList = studies.visits.map(function(visit) { let formList
                                    if (selectedVisitId === visit.id) { formList = studies.forms.map(function(form) { return <li className="form-name" id={form.id} key={form.id} onClick={this.onFormClick.bind(this)}>{form.name}</li> }, this) }
                                    const classTitle = selectedVisitId === visit.id ? 'visit-name selected' : 'visit-name'
                                    const formsHeader = <div id="formsHeader"><img className="right-arrow-icon" id="formsArrow" src={arrowUrl} alt="open" />Forms:</div>
                                    const dropdownLogo = selectedVisitId === visit.id ? <img src={treeUrl} className="tree-icon" alt="open" /> : ''
                                    return <div className="visit-expanded" key={`${visit.id}-${visit.name}`}><li className={classTitle} id={visit.id} onClick={this.onVisitClick.bind(this)}>{visit.name}{dropdownLogo}</li>{selectedVisitId === visit.id ? formsHeader : ''}<ul id="formList">{formList}</ul></div> }, this) }
                        const classTitle = selectedSubjectId === subject.id ? 'subject-name selected' : 'subject-name'
                        const visitsHeader = selectedSubjectId === subject.id ? <div id="visitsHeader"><img className="right-arrow-icon" id="visitsArrow" src={arrowUrl} alt="open" />Visits: </div> : ''
                        const dropdownLogo = selectedSubjectId === subject.id ? <img src={treeUrl} className="tree-icon" alt="open" /> : ''
                        return <div className="subject-expanded" key={`${subject.id}-${subject.name}`}><li className={classTitle} id={subject.id} onClick={this.onSubjectClick.bind(this)}>{subject.name}{dropdownLogo}</li>{visitsHeader}<ul id="visitList">{visitList}</ul></div> }, this)
                const subjectsHeader = selectedSiteId === branch.site.id ? <div id="subjectsHeader"><img className="right-arrow-icon" id="subjectsArrow" src={arrowUrl} alt="open" />Subjects:</div> : ''
                const classTitle = selectedSiteId === branch.site.id ? 'site-name selected' : 'site-name'
            return <div className="site-expanded" key={`${branch.site.id}-${branch.site.name}`}><div className={classTitle} title={branch.site.name} onClick={this.onSiteClick.bind(this)} id={branch.site.id}>{branch.site.name}<img src={treeUrl} className="tree-icon" alt="open" /></div>{subjectsHeader}<ul className="site-subjects">{subjectList}</ul></div>
            } else {
                return <div className="site-name" title={branch.site.name} key={`${branch.site.id}-${branch.site.name}`} onClick={this.onSiteClick.bind(this)} id={branch.site.id}>{branch.site.name}</div> } })
        const formInfo = selectedFormId === null ? '' : <SubTabs.FormInfo form={studies.form} />
        const loadingGif = studies.isLoading ? <img src={loadingUrl} id="sitesLoadingGif" alt="ness" /> : ''
        if ('answers' in this.props) { debugger }
        return (
            <div id="sitesPageWrapper">
                <img id="sitesPageLogo" src={sitesLogoUrl} alt="sites" />
                <div id="sitesHeader">Select a site:</div>
                {loadingGif}{tree}{formInfo}
            </div>
        )
    }
}

export default withRouter(connect(state => {
        const { studies, subTabs } = state
        return { state: { studies, subTabs } } },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Sites))