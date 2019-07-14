const initialState = {
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
    answers: [],
    currentStudyId: 0,
    currentSiteId: 0,
    currentSubjectId: 0,
    currentVisitId: 0,
    currentFormId: 0,
    currentStudyTab: 0,
    currentSubjectVisitFormId: 0,
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

const requestFormsFromVisitType = 'REQUEST_FORMS_FROM_VISIT'
const receiveFormsFromVisitType = 'RECEIVE_FORMS_FROM_VISIT'

const requestFormsFromStudyType = 'REQUEST_FORMS_FROM_STUDY'
const receiveFormsFromStudyType = 'RECEIVE_FORMS_FROM_STUDY'

const requestFormType = 'REQUEST_FORM'
const receiveFormType = 'RECEIVE_FORM'

const requestSubjectVisitFormType = 'REQUEST_SUBJECT_VISIT_FORM'
const receiveSubjectVisitFormType = 'RECEIVE_SUBJECT_VISIT_FORM'

const requestAnswersType = 'REQUEST_ANSWERS'
const receiveAnswersType = 'RECEIVE_ANSWERS'

const requestCurrentStudyType = 'REQUEST_CURRENT_STUDY'
const receiveCurrentStudyType = 'RECEIVE_CURRENT_STUDY'

const setCurrentSubjectVisitFormType = 'SET_CURRENT_SUBJECT_VISIT_FORM'
const currentStudyTabChangeType = 'CURRENT_STUDY_TAB_CHANGE'

const setCurrentStudyType = 'SET_CURRENT_STUDY'
const setCurrentSiteType = 'SET_CURRENT_SITE'
const setCurrentSubjectType = 'SET_CURRENT_SUBJECT'
const setCurrentVisitType = 'SET_CURRENT_VISIT'
const setCurrentFormType = 'SET_CURRENT_FORM'
const setIsLoadingType = 'SET_IS_LOADING'

export const actionCreators = {

    requestStudies: () => async (dispatch) => {
        dispatch({ type: requestStudiesType })
        const url = `/api/Studies`
        const response = await fetch(url)
        const studiesList = await response.json()
        dispatch({ type: receiveStudiesType, studiesList })
    },

    requestStudy: studyId => async (dispatch) => {
        dispatch({ type: requestStudyType })
        const url = `/api/Studies/GetStudy/${studyId}`
        const response = await fetch(url)
        const study = await response.json()
        dispatch({ type: receiveStudyType, study })
    },

    requestStudyComponents: studyId => async (dispatch) => {
        dispatch({ type: requestStudyComponentsType })
        const url = `/api/Studies/GetStudyComponents/${studyId}`
        const response = await fetch(url)
        const studyComponentsList = await response.json()
        dispatch({ type: receiveStudyComponentsType, studyComponentsList })
    },

    requestSites: studyId => async (dispatch) => {
        dispatch({ type: requestSitesType })
        const url = `/api/Studies/GetSites/${studyId}`
        const response = await fetch(url)
        const sitesList = await response.json()
        dispatch({ type: receiveSitesType, sitesList })
    },

    requestSubjects: siteId => async (dispatch) => {
        dispatch({ type: requestSubjectsType })
        const url = `/api/Studies/GetSubjects/${siteId}`
        const response = await fetch(url)
        const subjectsList = await response.json()
        dispatch({ type: receiveSubjectsType, subjectsList })
    },

    requestSubject: subjectId => async (dispatch) => {
        dispatch({ type: requestSubjectType })
        const url = `/api/Studies/GetSubject/${subjectId}`
        const response = await fetch(url)
        const subject = await response.json()
        dispatch({ type: receiveSubjectType, subject })
    },

    requestVisits: subjectId => async (dispatch) => {
        dispatch({ type: requestVisitsType })
        const url = `/api/Studies/GetVisits/${subjectId}`
        const response = await fetch(url)
        const visits = await response.json()
        dispatch({ type: receiveVisitsType, visits })
    },

    requestVisit: visitId => async (dispatch) => {
        dispatch({ type: requestVisitType })
        const url = `/api/Studies/GetVisit/${visitId}`
        const response = await fetch(url)
        const visit = await response.json()
        dispatch({ type: receiveVisitType, visit })
    },

    requestFormsFromStudy: studyId => async (dispatch) => {
        dispatch({ type: requestFormsFromStudyType })
        const url = `/api/Studies/GetFormsFromStudy/${studyId}`
        const response = await fetch(url)
        const forms = await response.json()
        dispatch({ type: receiveFormsFromStudyType, forms })
    },

    requestFormsFromVisit: visitId => async (dispatch) => {
        dispatch({ type: requestFormsFromVisitType })
        const url = `/api/Studies/GetFormsFromVisit/${visitId}`
        const response = await fetch(url)
        const forms = await response.json()
        dispatch({ type: receiveFormsFromVisitType, forms })
    },

    requestForm: formId => async (dispatch) => {
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
        dispatch({ type: receiveSubjectVisitFormType, subjectVisitForm })
    },

    requestAnswers: (subjectId, visitId, formId) => async (dispatch) => {
        dispatch({ type: requestAnswersType })
        const url = `/api/Studies/GetAnswers/${subjectId}/${visitId}/${formId}`
        const response = await fetch(url)
        const answers = await response.json()
        dispatch({ type: receiveAnswersType, answers })
    },

    setCurrentStudy: studyId => async (dispatch) => { dispatch({ type: setCurrentStudyType, studyId }) },
    setCurrentSite: siteId => async (dispatch) => { dispatch({ type: setCurrentSiteType, siteId }) },
    setCurrentSubject: subjectId => async (dispatch) => { dispatch({ type: setCurrentSubjectType, subjectId }) },
    setCurrentVisit: visitId => async (dispatch) => { dispatch({ type: setCurrentVisitType, visitId }) },
    setCurrentForm: formId => async (dispatch) => { dispatch({ type: setCurrentFormType, formId }) },
    setCurrentSubjectVisitForm: subjectVisitFormId => async (dispatch) => { dispatch({ type: setCurrentSubjectVisitFormType, subjectVisitFormId }) },
    currentStudyTabChange: studyTabId => async (dispatch) => { dispatch({ type: currentStudyTabChangeType, studyTabId }) },
    setIsLoading: isLoading => async (dispatch) => { dispatch({ type: setIsLoadingType, isLoading }) }
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

        case requestFormsFromVisitType:
            return {
                ...state,
                isLoading: true
            }
        case receiveFormsFromVisitType:
            return {
                ...state,
                forms: action.forms,
                isLoading: false
            }
        case requestFormsFromStudyType:
            return {
                ...state,
                isLoading: true
            }
        case receiveFormsFromStudyType:
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

        case requestAnswersType:
            return {
                ...state,
                isLoading: true
            }
        case receiveAnswersType:
            return {
                ...state,
                answers: action.answers,
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
        case setCurrentSiteType:
            return {
                ...state,
                currentSiteId: action.siteId
            }
        case setCurrentSubjectType:
            return {
                ...state,
                currentSubjectId: action.subjectId
            }
        case setCurrentVisitType:
            return {
                ...state,
                currentVisitId: action.visitId
            }
        case setCurrentFormType:
            return {
                ...state,
                currentFormId: action.formId
            }
        case currentStudyTabChangeType:
            return {
                ...state,
                currentStudyTab: action.studyTabId
            }
        case setCurrentSubjectVisitFormType:
            return {
                ...state,
                currentSubjectVisitForm: action.subjectVisitFormId
            }
        case setIsLoadingType:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}
