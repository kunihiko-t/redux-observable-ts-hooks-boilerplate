import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

import './vendor/rxjs'
import { history, store } from './store'
import { RootProps } from './@types/common'
import 'semantic-ui-css/semantic.min.css'


const root = document.getElementById('root')


const render = (Component: React.FC<RootProps>) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component history={history}/>
        </Provider>,
        root,
    )
}
render(App)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
