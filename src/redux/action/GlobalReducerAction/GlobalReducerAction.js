import * as GlobalReducerActionName from '../../constant/ActionName/GlobalReducerActionName'

export const query_restful_api = () => ({type: GlobalReducerActionName.QUERY_RESTFUL_API})
export const query_restful_api_on_return = (res) => ({
    type: GlobalReducerActionName.QUERY_RESTFUL_API_ON_RETURN,
    res: res
})
export const query_restful_api_on_error = () => ({type: GlobalReducerActionName.QUERY_RESTFUL_API_ON_ERROR})
