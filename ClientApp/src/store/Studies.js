const initialState = { studies: [], study: {}, isLoading: false }

const requestStudiesType = 'REQUEST_STUDIES'
const receiveStudiesType = 'RECEIVE_STUDIES'
const requestStudyType = 'REQUEST_STUDY'
const receiveStudyType = 'RECEIVE_STUDY'
const addStudyType = 'ADD_STUDY'

let studiesList = []
let newStudiesList = []

export const actionCreators = {
    requestStudies: () => async (dispatch, getState) => {
        dispatch({ type: requestStudiesType })
        const url = `/api/studies`
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

    addStudy: (study) => async (dispatch, getState) => {
        const url = "/api/studies"
        const data = JSON.stringify({ name: study.name })
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: data
        })
            .then(data => dispatch({ type: addStudyType, study: data }))
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
        case addStudyType:
            newStudiesList = studiesList.push({
                name: action.study.name
            })
            return {
                ...state,
                studies: newStudiesList,
                isLoading: false
            }
        default:
            return state
    }
}
