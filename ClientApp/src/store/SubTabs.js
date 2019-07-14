const initialState = {
    dataSubTab: 0,
    siteId: {},
    subjectId: {},
    subjectVisitId: {},
    sidebarShow: true,
    formInfoShow: false
}

const dataSubTabChangeType = 'DATA_SUB_TAB_CHANGE'
const sitesSiteChangeType = 'SITES_SITE_CHANGE'
const sitesSubjectChangeType = 'SITES_SUBJECT_CHANGE'
const sitesSubjectVisitChangeType = 'SITES_SUBJECTVISIT_CHANGE'
const setFormInfoShowType = 'SET_FORM_INFO_SHOW'
const setSidebarShowType = 'SET_SIDEBAR_SHOW'

export const actionCreators = {
    dataSubTabChange: (subTabId) => async (dispatch) => {
        dispatch({ type: dataSubTabChangeType, subTabId })
    },
    sitesSiteChange: (siteId) => async (dispatch) => {
        dispatch({ type: sitesSiteChangeType, siteId })
    },
    sitesSubjectChange: (subjectId) => async (dispatch) => {
        dispatch({ type: sitesSubjectChangeType, subjectId })
    },
    sitesSubjectVisitChange: (subjectVisitId) => async (dispatch) => {
        dispatch({ type: sitesSubjectVisitChangeType, subjectVisitId })
    },
    setFormInfoShow: status => async (dispatch) => {
        dispatch({ type: setFormInfoShowType, status })
    },
    setSidebarShow: status => async (dispatch) => {
        dispatch({ type: setSidebarShowType, status })
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
        case sitesSiteChangeType:
            return {
                ...state,
                siteId: action.siteId
            }
        case sitesSubjectChangeType:
            return {
                ...state,
                subjectId: action.subjectId
            }
        case sitesSubjectVisitChangeType:
            return {
                ...state,
                subjectVisitId: action.subjectVisitId
            }
        case setFormInfoShowType:
            return {
                ...state,
                formInfoShow: action.status
            }
        case setSidebarShowType:
            return {
                ...state,
                sidebarShow: action.status
            }
        default:
            return state
    }
}
