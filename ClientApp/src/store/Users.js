const initialState = {
    users: [],
    user: {},
    currentUser: null,
    logShowing: false,
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

const logShowType = 'LOG_SHOW_TYPE'
const logHideType = 'LOG_HIDE_TYPE'

const logOutType = 'LOG_OUT'

export const actionCreators = {

    requestUsers: () => async (dispatch) => {
        dispatch({ type: requestUsersType })
        const url = `/api/Users`
        const response = await fetch(url)
        const usersList = await response.json()
        dispatch({ type: receiveUsersType, usersList })
    },

    requestUser: (id) => async (dispatch) => {
        dispatch({ type: requestUserType })
        const url = `/api/Users/GetUser/${id}`
        const response = await fetch(url)
        const user = await response.json()
        dispatch({ type: receiveUserType, user })
    },

    requestCurrentUser: () => async (dispatch) => {
        dispatch({ type: requestCurrentUserType })
        const url = `/api/Users/GetCurrentUser`
        const response = await fetch(url)
        const currentUser = await response.json()
        dispatch({ type: receiveCurrentUserType, currentUser })
    },

    attemptLogIn: (username, password) => async (dispatch) => {
        dispatch({ type: attemptLogInType })
        const data = { Username: username, Password: password }
        const request = await fetch(`/api/Users/AttemptLogIn`, {
            method: 'POST', body: JSON.stringify(data)
        })
        const response = await request.json()
        response != null ? dispatch({ type: logInSuccessType, response })
                         : dispatch({ type: logInFailureType, response })
    },

    logOut: () => async (dispatch) => { dispatch({ type: logOutType, currentUser: null }) },

    logShow: () => async (dispatch) => { dispatch({ type: logShowType, logShowing: true }) },
    logHide: () => async (dispatch) => { dispatch({ type: logHideType, logShowing: false }) }
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
            response: action.response,
            error: null,
            currentUser: action.response,
            logShow: false,
            isLoading: false
        }        
    case logInFailureType:
        return {
            ...state,
            error: action.response,
            response: null,
            currentUser: null,
            isLoading: false
        }
    case logOutType:
        return {
            ...state,
            currentUser: action.currentUser
        }
    case logShowType:
        return {
            ...state,
            logShowing: action.logShowing
        }
    case logHideType:
        return {
            ...state,
            logShowing: action.logShowing
        }
    default:
        return state
    }
}
