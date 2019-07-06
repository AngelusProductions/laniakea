const initialState = {
    masterSearch: '',
    isLoading: false,
    results: ""
}

const masterSearchRequestType = 'REQUEST_MASTER_SEARCH'
const masterSearchResponseType = 'RECEIVE_MASTER_SEARCH'

export const actionCreators = {
    masterSearch: (search, studyId, studyComponentId) => async dispatch => {
        dispatch({ type: masterSearchRequestType })
        const url = `/api/searches/MasterSearch/${studyId}/${studyComponentId}/${JSON.stringify(search)}`
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        const resultsString = await response.json()
        const results = JSON.parse(resultsString)
        dispatch({ type: masterSearchResponseType, results })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
        case masterSearchRequestType:
                return {
                    ...state,
                    isLoading: true
                }
        case masterSearchResponseType:
            return {
                ...state,
                isLoading: false,
                results: action.results
            }
        default:
            return state
    }
}
