import * as GlobalReducerActionName from '../../constant/ActionName/GlobalReducerActionName'

const initialState = {
    res: ``
}
const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalReducerActionName.QUERY_RESTFUL_API_ON_RETURN: {
            return {...state, res: action.res.data}
        }
        default: {
            return state
        }
    }
}
export default GlobalReducer
