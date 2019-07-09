﻿const initialState = {
    studies: [],
    study: {},
    studyComponents: [],
    sites: [],
    subjects: [],
    subject: {},
    visits: [],
    visit: {},
    forms: [],
    form: {},
    subjectVisitForm: {},
    currentStudyId: 0,
    currentStudyTab: 0,
    isLoading: false
}

const requestStudiesType = 'REQUEST_STUDIES'
const receiveStudiesType = 'RECEIVE_STUDIES'

const requestStudyType = 'REQUEST_STUDY'
const receiveStudyType = 'RECEIVE_STUDY'

const requestStudyComponentsType = 'REQUEST_STUDY_COMPONENTS'
const receiveStudyComponentsType = 'RECEIVE_STUDY_COMPONENTS'

const requestSitesType = 'REQUEST_SITES'
const receiveSitesType = 'RECEIVE_SITES'

const requestSubjectsType = 'REQUEST_SUBJECTS'
const receiveSubjectsType = 'RECEIVE_SUBJECTS'

const requestSubjectType = 'REQUEST_SUBJECT'
const receiveSubjectType = 'RECEIVE_SUBJECT'

const requestVisitsType = 'REQUEST_VISITS'
const receiveVisitsType = 'RECEIVE_VISITS'

const requestVisitType = 'REQUEST_VISIT'
const receiveVisitType = 'RECEIVE_VISIT'

const requestFormsType = 'REQUEST_FORMS'
const receiveFormsType = 'RECEIVE_FORMS'

const requestFormType = 'REQUEST_FORM'
const receiveFormType = 'RECEIVE_FORM'

const requestSubjectVisitFormType = 'REQUEST_SUBJECT_VISIT_FORM'
const receiveSubjectVisitFormType = 'RECEIVE_SUBJECT_VISIT_FORM'

const requestCurrentStudyType = 'REQUEST_CURRENT_STUDY'
const receiveCurrentStudyType = 'RECEIVE_CURRENT_STUDY'

const currentStudyTabChangeType = 'CURRENT_STUDY_TAB_CHANGE'

const setCurrentStudyType = 'SET_CURRENT_STUDY'

export const actionCreators = {

    requestStudies: () => async (dispatch) => {
        dispatch({ type: requestStudiesType })
        const url = `/api/Studies`
        const response = await fetch(url)
        const studiesList = await response.json()
        dispatch({ type: receiveStudiesType, studiesList })
    },

    requestStudy: (studyId) => async (dispatch) => {
        dispatch({ type: requestStudyType })
        const url = `/api/Studies/GetStudy/${studyId}`
        const response = await fetch(url)
        const study = await response.json()
        dispatch({ type: receiveStudyType, study })
    },

    requestStudyComponents: (studyId) => async (dispatch) => {
        dispatch({ type: requestStudyComponentsType })
        const url = `/api/Studies/GetStudyComponents/${studyId}`
        const response = await fetch(url)
        const studyComponentsList = await response.json()
        dispatch({ type: receiveStudyComponentsType, studyComponentsList })
    },

    requestSites: (studyId) => async (dispatch) => {
        dispatch({ type: requestSitesType })
        const url = `/api/Studies/GetSites/${studyId}`
        const response = await fetch(url)
        const sitesList = await response.json()
        dispatch({ type: receiveSitesType, sitesList })
    },

    requestSubjects: (siteId) => async (dispatch) => {
        dispatch({ type: requestSubjectsType })
        const url = `/api/Studies/GetSubjects/${siteId}`
        const response = await fetch(url)
        const subjectsList = await response.json()
        dispatch({ type: receiveSubjectsType, subjectsList })
    },

    requestSubject: (subjectId) => async (dispatch) => {
        dispatch({ type: requestSubjectType })
        const url = `/api/Studies/GetSubject/${subjectId}`
        const response = await fetch(url)
        const subject = await response.json()
        dispatch({ type: receiveSubjectType, subject })
    },

    requestVisits: (subjectId) => async (dispatch) => {
        dispatch({ type: requestVisitsType })
        const url = `/api/Studies/GetVisits/${subjectId}`
        const response = await fetch(url)
        const visits = await response.json()
        dispatch({ type: receiveVisitsType, visits })
    },

    requestVisit: (visitId) => async (dispatch) => {
        dispatch({ type: requestVisitType })
        const url = `/api/Studies/GetVisit/${visitId}`
        const response = await fetch(url)
        const visit = await response.json()
        dispatch({ type: receiveVisitType, visit })
    },

    requestForms: (visitId) => async (dispatch) => {
        dispatch({ type: requestFormsType })
        const url = `/api/Studies/GetForms/${visitId}`
        const response = await fetch(url)
        const forms = await response.json()
        dispatch({ type: receiveFormsType, forms })
    },

    requestForm: (formId) => async (dispatch) => {
        dispatch({ type: requestFormType })
        const url = `/api/Studies/GetForm/${formId}`
        const response = await fetch(url)
        const form = await response.json()
        dispatch({ type: receiveFormType, form })
    },

    requestSubjectVisitForm: (subjectId, visitId, formId) => async (dispatch) => {
        dispatch({ type: requestSubjectVisitFormType })
        const url = `/api/Studies/GetSubjectVisitForm/${subjectId}/${visitId}/${formId}`
        const response = await fetch(url)
        const subjectVisitForm = await response.json()
        debugger
        dispatch({ type: receiveSubjectVisitFormType, subjectVisitForm })
    },
    
    setCurrentStudy: (studyId) => async (dispatch) => {
        dispatch({ type: setCurrentStudyType, studyId })
    },

    currentStudyTabChange: (studyId) => async (dispatch) => {
        dispatch({ type: currentStudyTabChangeType, studyId })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {

        case requestStudiesType:
            return {
                ...state,
                isLoading: true
            }
        case receiveStudiesType:
            return {
                ...state,
                studies: action.studiesList,
                isLoading: false
            }
        case requestStudyType:
            return {
                ...state,
                isLoading: true
            }
        case receiveStudyType:
            return {
                ...state,
                study: action.study,
                isLoading: false
            }
        case requestStudyComponentsType:
            return {
                ...state,
                isLoading: true
            }
        case receiveStudyComponentsType:
            return {
                ...state,
                studyComponents: action.studyComponentsList,
                isLoading: false
            }
        case requestSitesType:
            return {
                ...state,
                isLoading: true
            }
        case receiveSitesType:
            return {
                ...state,
                sites: action.sitesList,
                isLoading: false
            }
        case requestSubjectsType:
            return {
                ...state,
                isLoading: true
            }
        case receiveSubjectsType:
            return {
                ...state,
                subjects: action.subjectsList,
                isLoading: false
            }
        case requestSubjectType:
            return {
                ...state,
                isLoading: true
            }
        case receiveSubjectType:
            return {
                ...state,
                subject: action.subject,
                isLoading: false
            }
        case requestVisitsType:
            return {
                ...state,
                isLoading: true
            }
        case receiveVisitsType:
            return {
                ...state,
                visits: action.visits,
                isLoading: false
            }
        case requestVisitType:
            return {
                ...state,
                isLoading: true
            }
        case receiveVisitType:
            return {
                ...state,
                visit: action.visit,
                isLoading: false
            }
        case requestFormsType:
            return {
                ...state,
                isLoading: true
            }
        case receiveFormsType:
            return {
                ...state,
                forms: action.forms,
                isLoading: false
            }
        case requestFormType:
            return {
                ...state,
                isLoading: true
            }
        case receiveFormType:
            return {
                ...state,
                form: action.form,
                isLoading: false
            }
        case requestSubjectVisitFormType:
            return {
                ...state,
                isLoading: true
            }
        case receiveSubjectVisitFormType:
            return {
                ...state,
                subjectVisitForm: action.subjectVisitForm,
                isLoading: false
            }
        case requestCurrentStudyType:
            return {
                ...state,
                isLoading: true
            }
        case receiveCurrentStudyType:
            return {
                ...state,
                currentStudy: action.currentStudy,
                isLoading: false
            }
        case setCurrentStudyType:
            return {
                ...state,
                currentStudyId: action.studyId
            }
        case currentStudyTabChangeType:
            return {
                ...state,
                currentStudyTab: action.studyId
            }
        default:
            return state
    }
}
