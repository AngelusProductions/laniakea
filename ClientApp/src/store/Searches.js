const initialState = {
    masterSearch: '',
    isLoading: false
}

const masterSearchRequestType = 'REQUEST_MASTER_SEARCH'
const masterSearchResponseType = 'RECEIVE_MASTER_SEARCH'

export const actionCreators = {
    masterSearch: (search, i, j) => async dispatch => {
        dispatch({ type: masterSearchRequestType })
        const url = `/api/searches/MasterSearch/${i}/${j}/${JSON.stringify(search)}`
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        //debugger
        const results = await response.json()
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
                results: action.results,
                isLoading: false
            }
        default:
            return state
    }
}
