const initialState = {
    studies: [],
    study: {},
    studyComponents: [],
    isLoading: false
}

const requestStudiesType = 'REQUEST_STUDIES'
const receiveStudiesType = 'RECEIVE_STUDIES'

const requestStudyType = 'REQUEST_STUDY'
const receiveStudyType = 'RECEIVE_STUDY'

const requestStudyComponentsType = 'REQUEST_STUDYCOMPONENTS'
const receiveStudyComponentsType = 'RECEIVE_STUDYCOMPONENTS'

export const actionCreators = {

    requestStudies: () => async (dispatch, getState) => {
        dispatch({ type: requestStudiesType })
        const url = `/api/Studies`
        const response = await fetch(url)
        const studiesList = await response.json()
        dispatch({ type: receiveStudiesType, studiesList })
    },

    requestStudy: (id) => async (dispatch, getState) => {
        dispatch({ type: requestStudyType })
        const url = `/api/Studies/GetStudy/${id}`
        const response = await fetch(url)
        const study = await response.json()
        dispatch({ type: receiveStudyType, study })
    },

    requestStudyComponents: (id) => async (dispatch, getState) => {
        dispatch({ type: requestStudyComponentsType })
        const url = `/api/Studies/GetStudyComponents/${id}`
        const response = await fetch(url)
        const studyComponentsList = await response.json()
        dispatch({ type: receiveStudyComponentsType, studyComponentsList })
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

        default:
            return state
    }
}
