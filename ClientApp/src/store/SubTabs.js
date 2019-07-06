const initialState = {
    dataSubTab: 0
}

const dataSubTabChangeType = 'DATA_SUB_TAB_CHANGE'

export const actionCreators = {
    dataSubTabChange: (subTabId) => async (dispatch) => {
        dispatch({ type: dataSubTabChangeType, subTabId })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
        case dataSubTabChangeType:
            return {
                ...state,
                dataSubTab: action.subTabId
            }
        default:
            return state
    }
}
