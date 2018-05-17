import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from "redux-saga"
import {Provider} from 'react-redux'
import {addLocaleData, IntlProvider} from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_zh from 'react-intl/locale-data/zh'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import {Route} from 'react-router'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import logger from 'redux-logger'

import HomeContainer from './container/HomeContainer'
import messages_zh from './translations/zh.json'
import GlobalReducer from './redux/reducer/GlobalReducer'
import GlobalSaga from './redux/saga/GlobalReducerSaga'

//intl
const messages = {
    "zh": messages_zh
}
addLocaleData([...locale_en, ...locale_zh])

//router
const history = createHistory()
const myRouterMiddleware = routerMiddleware(history)

//reducer
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers({
        GlobalReducer,
        // S3Reducer,
        router: routerReducer
    }),
    compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(myRouterMiddleware),
        applyMiddleware(logger)
    )
)
sagaMiddleware.run(GlobalSaga)
// sagaMiddleware.run(S3Saga)
ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale="zh" messages={messages[`zh`]}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={HomeContainer}/>
                    {/* <Route exact path="/upload/:bucketName" component={UploadContainer}/> */}
                </div>
            </ConnectedRouter>
        </IntlProvider>
    </Provider>
    , document.getElementById(`root`))
registerServiceWorker()
