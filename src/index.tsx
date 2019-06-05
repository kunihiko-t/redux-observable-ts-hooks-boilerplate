import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

import './vendor/rxjs'
import { store, history } from './store'
import { History } from 'history'


const root = document.getElementById('root')

interface OuterProps {
    history: History;
}

const render = (Component: React.FC<OuterProps>) => {
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
