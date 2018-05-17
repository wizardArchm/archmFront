import {takeEvery, call, put} from 'redux-saga/effects'
import * as GlobalReducerActionName from '../../constant/ActionName/GlobalReducerActionName'
import * as GlobalReducerAction from '../../action/GlobalReducerAction/GlobalReducerAction'
import * as RestClient from '../../../api/RestClient'

function* queryRestfulApi() {
    try {
        const res = yield call(RestClient.testRestGet)
        yield put(GlobalReducerAction.query_restful_api_on_return(res))
    } catch (e) {
        yield put(GlobalReducerAction.query_restful_api_on_error())
    }
}

export default function* GlobalReducerSaga() {
    yield takeEvery(GlobalReducerActionName.QUERY_RESTFUL_API, queryRestfulApi)
}
