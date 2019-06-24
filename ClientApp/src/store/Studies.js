const initialState = {
    studies: [],
    study: {},
    studyComponents: [],
    isLoading: false
}

export const actionCreators = {

    requestStudies: () => async (dispatch, getState) => {
        dispatch({ type: 'REQUEST_STUDIES' })
        const url = `/api/Studies`
        const response = await fetch(url)
        const studiesList = await response.json()
        dispatch({ type: 'RECEIVE_STUDIES', studiesList })
    },

    requestStudy: (id) => async (dispatch, getState) => {
        dispatch({ type: 'REQUEST_STUDY' })
        const url = `/api/Studies/GetStudy/${id}`
        const response = await fetch(url)
        const study = await response.json()
        dispatch({ type: 'RECEIVE_STUDY', study })
    },

    requestStudyComponents: (id) => async (dispatch, getState) => {
        dispatch({ type: 'REQUEST_STUDYCOMPONENTS' })
        const url = `/api/Studies/GetStudyComponents/${id}`
        const response = await fetch(url)
        const studyComponentsList = await response.json()
        dispatch({ type: 'RECEIVE_STUDYCOMPONENTS', studyComponentsList })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {

        case 'REQUEST_STUDIES':
            return {
                ...state,
                isLoading: true
            }
        case 'RECEIVE_STUDIES':
            return {
                ...state,
                studies: action.studiesList,
                isLoading: false
            }

        case 'REQUEST_STUDY':
            return {
                ...state,
                isLoading: true
            }
        case 'RECEIVE_STUDY':
            return {
                ...state,
                study: action.study,
                isLoading: false
            }

        case 'REQUEST_STUDYCOMPONENTS':
            return {
                ...state,
                isLoading: true
            }
        case 'RECEIVE_STUDYCOMPONENTS':
            return {
                ...state,
                studyComponents: action.studyComponentsList,
                isLoading: false
            }
        default:
            return state
    }
}
