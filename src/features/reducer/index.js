import { 
  TABLE_DATA_SUCCESS,
  TABLE_DATA_REQUEST,
  TABLE_DATA_FAILURE,
  INPUT_DATA_FAILURE,
  INPUT_DATA_REQUEST,
  INPUT_DATA_SUCCESS
} from '../constant'

const initialState = {
    isLoading: false,
    isError: false,
    details: [],
    errorMsg: ''
}

export const tableReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TABLE_DATA_REQUEST:
          return {
            ...state,
            isLoading: true,
          }
        case TABLE_DATA_SUCCESS: 
           return {
            ...state,
            isLoading: false,
            details: payload,
            errMsg: '',
            isError: false
           }
        case TABLE_DATA_FAILURE: 
           return {
            ...state,
            isLoading: false,
            details: [],
            errMsg: payload,
            isError: true
           }
           case INPUT_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case INPUT_DATA_SUCCESS: 
        return {
            ...state,
            isLoading: false,
            isError: false,
            details: payload,
            errorMsg: ''
        }
        case INPUT_DATA_FAILURE: 
        return {
            ...state,
            isLoading: false,
            isError: true,
            details: [],
            errorMsg: payload
        }
        default:
            return state;
    }
}