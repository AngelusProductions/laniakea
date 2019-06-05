const initialState = { studyComponents: [], studyComponent: {}, isLoading: false }

const requestStudyComponentsType = 'REQUEST_STUDYCOMPONENTS'
const receiveStudyComponentsType = 'RECEIVE_STUDYCOMPONENTS'
const requestStudyComponentType = 'REQUEST_STUDYCOMPONENT'
const receiveStudyComponentType = 'RECEIVE_STUDYCOMPONENT'

let studyComponentsList = []
let newStudyComponentsList = []

export const actionCreators = {
    requestStudyComponents: () => async (dispatch, getState) => {
        dispatch({ type: requestStudyComponentsType })
        const url = `/api/studyComponents`
        const response = await fetch(url)
        const studyComponentsList = await response.json()
        dispatch({ type: receiveStudyComponentsType, studyComponentsList })
    },

    requestStudyComponent: (id) => async (dispatch, getState) => {
        dispatch({ type: requestStudyComponentType })
        const url = `/api/StudyComponents/GetStudyComponent/${id}`
        const response = await fetch(url)
        const studyComponent = await response.json()
        dispatch({ type: receiveStudyComponentType, studyComponent })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
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
        case requestStudyComponentType:
            return {
                ...state,
                isLoading: true
            }
        case receiveStudyComponentType:
            return {
                ...state,
                studyComponent: action.studyComponent,
                isLoading: false
            }
        default:
            return state
    }
}
