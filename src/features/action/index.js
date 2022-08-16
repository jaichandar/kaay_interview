import { 
  TABLE_DATA_FAILURE,
  TABLE_DATA_REQUEST,
  TABLE_DATA_SUCCESS, 
  INPUT_DATA_FAILURE, 
  INPUT_DATA_REQUEST, 
  INPUT_DATA_SUCCESS
} from '../constant/index'

export const fetchTableData = (pageNumber) => async(dispatch) => {
    let url = new URL(`https://api.punkapi.com/v2/beers?per_page=10`)
    try {
      dispatch({ type: TABLE_DATA_REQUEST })

    if(pageNumber > 1) {
        url.searchParams.append('page', pageNumber)
    }
       
    let value = await fetch(url.href, {
        method:'get'
    })
    let result = await value.json()

    if(result.length > 1) {
        dispatch({ type: TABLE_DATA_SUCCESS, payload: result })
    } else {
        throw new Error('Something went wrong')
    }
    } catch (error) {
        dispatch({ type: TABLE_DATA_FAILURE, payload: error.message })
    }
}

export const performSearch = (keyword) => async(dispatch) => {
    let url = new URL(`https://api.punkapi.com/v2/beers?beer_name=${keyword}`)
    try {
        dispatch({ type: INPUT_DATA_REQUEST })
        
        const data = await fetch(url.href, {
            method: 'get'
        })

        const result = await data.json()

        if(result.length > 0) {
            dispatch({ type: INPUT_DATA_SUCCESS, payload: result })
        } else {
            throw new Error('No Match Found')
        }
        
    } catch (error) {
       dispatch({ type: INPUT_DATA_FAILURE, payload: error.message })
    }
}