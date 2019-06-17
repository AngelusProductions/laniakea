const initialState = {
    users: [],
    user: {},
    currentUser: null,
    isLoading: false,
    error: null
}

const requestUsersType = 'REQUEST_USERS'
const receiveUsersType = 'RECEIVE_USERS'

const requestUserType = 'REQUEST_USER'
const receiveUserType = 'RECEIVE_USER'

const requestCurrentUserType = 'REQUEST_CURRENT_USER'
const receiveCurrentUserType = 'RECEIVE_CURRENT_USER'

const attemptLogInType = 'ATTEMPT_LOG_IN'
const logInSuccessType = 'LOG_IN_SUCCESS'
const logInFailureType = 'LOG_IN_FAILURE'

export const actionCreators = {

    requestUsers: () => async (dispatch, getState) => {
        dispatch({ type: requestUsersType })
        const url = `/api/Users`
        const response = await fetch(url)
        const usersList = await response.json()
        dispatch({ type: receiveUsersType, usersList })
    },

    requestUser: (id) => async (dispatch, getState) => {
        dispatch({ type: requestUserType })
        const url = `/api/Users/GetUser/${id}`
        const response = await fetch(url)
        const user = await response.json()
        dispatch({ type: receiveUserType, user })
    },

    requestCurrentUser: () => async (dispatch, getState) => {
        dispatch({ type: requestCurrentUserType })
        const url = `/api/Users/GetCurrentUser`
        const response = await fetch(url)
        const currentUser = await response.json()
        dispatch({ type: receiveCurrentUserType, currentUser })
    },

    attemptLogIn: (username, password) => async (dispatch, getState) => {
        dispatch({ type: attemptLogInType })
        const data = {
            "Username": username,
            "Password": password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data)
        }
        const url = `/api/Users/AttemptLogIn`
        const response = await fetch(url, requestOptions)
        if (response.ok === true) {
            const currentUser = await response.json()
            dispatch({ logInSuccessType, currentUser })
        } else {
            const error = await response.json()
            dispatch({ logInFailureType, error })
        }
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {

    case requestUsersType:
        return {
            ...state,
            isLoading: true
        }
    case receiveUsersType:
        return {
            ...state,
            users: action.usersList,
            isLoading: false
        }

    case requestUserType:
        return {
            ...state,
            isLoading: true
        }
    case receiveUserType:
        return {
            ...state,
            user: action.user,
            isLoading: false
        }

    case requestCurrentUserType:
        return {
            ...state,
            isLoading: true
        }
    case receiveCurrentUserType:
        return {
            ...state,
            currentUser: action.currentUser,
            isLoading: false
            }
    case attemptLogInType:
        return {
            ...state,
            currentUser: action.currentUser,
            isLoading: true
        }
    case logInSuccessType:
        return {
            ...state,
            currentUser: action.currentUser,
            isLoading: false
        }        
    case logInFailureType:
        return {
            ...state,
            error: action.error,
            isLoading: false
        }
    default:
        return state
    }
}
