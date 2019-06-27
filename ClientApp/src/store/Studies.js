const initialState = {
    studies: [],
    study: {},
    studyComponents: [],
    currentStudyId: 0,
    currentStudyTab: 0,
    isLoading: false
}

const requestStudiesType = 'REQUEST_STUDIES'
const receiveStudiesType = 'RECEIVE_STUDIES'

const requestStudyType = 'REQUEST_STUDY'
const receiveStudyType = 'RECEIVE_STUDY'

const requestStudyComponentsType = 'REQUEST_STUDY_CONPONENTS'
const receiveStudyComponentsType = 'RECEIVE_STUDY_CONPONENTS'

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

    requestStudy: (id) => async (dispatch) => {
        dispatch({ type: requestStudyType })
        const url = `/api/Studies/GetStudy/${id}`
        const response = await fetch(url)
        const study = await response.json()
        dispatch({ type: receiveStudyType, study })
    },

    requestStudyComponents: (id) => async (dispatch) => {
        dispatch({ type: requestStudyComponentsType })
        const url = `/api/Studies/GetStudyComponents/${id}`
        const response = await fetch(url)
        const studyComponentsList = await response.json()
        dispatch({ type: receiveStudyComponentsType, studyComponentsList })
    },
    
    setCurrentStudy: (id) => async (dispatch) => {
        dispatch({ type: setCurrentStudyType, id })
    },

    currentStudyTabChange: (id) => async (dispatch) => {
        dispatch({ type: currentStudyTabChangeType, id })
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
                currentStudyId: action.id
            }
        case currentStudyTabChangeType:
            return {
                ...state,
                currentStudyTab: action.id
            }
        default:
            return state
    }
}
