const initialState = {
    dvd: {},
    pdf: {},
    directoryInfo: {},
    isLoading: false
}

const createDVDRequestType = 'CREATE_DVD_REQUEST'
const createDVDResponseType = 'CREATE_DVD_RESPONSE'

const requestDirectoryInfoType = 'REQUEST_DIRECTORY_INFO'
const receiveDirectoryInfoType = 'RECEIVE_DIRECTORY_INFO'

const requestRowsExportType = 'REQUEST_ROWS_EXPORT'
const receiveRowsExportType = 'RECEIVE_ROWS_EXPORT'

export const actionCreators = {

    createDVD: study => async (dispatch) => {
        dispatch({ type: createDVDRequestType })
        const url = `/api/IO/CreateDVD/${study.sponsor.split(' ')[0]}/${study.protocol}`
        const response = await fetch(url)
        const dvdStatus = await response.json()
        dispatch({ type: createDVDResponseType, dvdStatus })
    },

    requestDirectoryInfo: study => async (dispatch) => {
        dispatch({ type: requestDirectoryInfoType })
        const url = `/api/IO/GetDirectoryInfo/${study.name}`
        const response = await fetch(url)
        const directoryInfo = await response.json()
        dispatch({ type: receiveDirectoryInfoType, directoryInfo })
    },

    exportRowsToPDF: rows => async (dispatch) => {
        dispatch({ type: requestRowsExportType })
        const url = `/api/IO/ExportRowsToPDF`
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rows)
            }
        )
        const pdf = await response.json()
        dispatch({ type: receiveRowsExportType, pdf })
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {

        case createDVDRequestType:
            return {
                ...state,
                isLoading: true
            }
        case createDVDResponseType:
            return {
                ...state,
                dvd: action.dvd,
                isLoading: false
            }

        case requestDirectoryInfoType:
            return {
                ...state,
                isLoading: true
            }
        case receiveDirectoryInfoType:
            return {
                ...state,
                directoryInfo: action.directoryInfo,
                isLoading: false
            }

        case requestRowsExportType:
            return {
                ...state,
                isLoading: true
            }
        case receiveRowsExportType:
            return {
                ...state,
                pdf: action.pdf,
                isLoading: false
            }

        default:
            return state
    }
}
