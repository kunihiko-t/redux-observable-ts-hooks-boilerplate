import { applyMiddleware, createStore, compose, combineReducers, Middleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from '../epics'
import rootReducer from '../reducers'

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const epicMiddleware = createEpicMiddleware()

const middleware: [Middleware] = [epicMiddleware]

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger')

    middleware.push(createLogger({ collapsed: true }))
}


declare global {
    interface Window {
        // eslint-disable-next-line no-undef
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()

const reducer = combineReducers({
    router: connectRouter(history),
    ...rootReducer,
})

middleware.push(routerMiddleware(history))

const configStore = (initialState = {}) => {
    const createStoreWithMiddleware = composeEnhancers(
        applyMiddleware(...middleware),
    )(createStore)

    const store = createStoreWithMiddleware(
        reducer,
        initialState,
    )

    epicMiddleware.run(rootEpic)

    return {
        store,
    }
}

const { store } = configStore()

export { store }
