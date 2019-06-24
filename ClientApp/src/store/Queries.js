const initialState = {
    masterQuery: '',
    isLoading: false
}

export const actionCreators = {
    masterQueryRequest: () => async (dispatch, getState) => {
        dispatch({ type: 'REQUEST_MASTER_QUERY' })
        const url = `/api/GetMasterQuery`
        const response = await fetch(url)
        const resultsList = await response.json()
        dispatch({ type: 'RECEIVE_MASTER_QUERY', resultsList })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
    case 'REQUEST_MASTER_QUERY':
            return {
                ...state,
                isLoading: true
            }
        case 'RECEIVE_MASTER_QUERY':
            return {
                ...state,
                studies: action.resultsList,
                isLoading: false
            }
        default:
            return state
    }
}
