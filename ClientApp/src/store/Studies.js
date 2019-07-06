const initialState = {
    studies: [],
    study: {},
    studyComponents: [],
    sites: [],
    subjects: [],
    subject: [],
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
