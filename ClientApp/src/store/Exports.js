const initialState = {
    dvd: {},
    isLoading: false
}

const createDVDRequestType = 'CREATE_DVD_REQUEST'
const createDVDResponseType = 'CREATE_DVD_RESPONSE'

export const actionCreators = {

    createDVD: (studyComponentId, includePHI, includeTriggers) => async (dispatch) => {
        dispatch({ type: createDVDRequestType })
        const url = `/api/Exports/CreateDVD/${studyComponentId}/${includePHI}/${includeTriggers}`
        const response = await fetch(url)
        const dvd = await response.json()
        dispatch({ type: createDVDResponseType, dvd })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
        case createDVDRequestType:
            return {
                ...state,
                isLoading: false
            }
        case createDVDResponseType:
            return {
                ...state,
                dvd: action.dvd,
                isLoading: true
            }
        default:
            return state
    }
}
