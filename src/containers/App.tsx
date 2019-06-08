import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConnectedRouter, LocationChangeAction, RouterState } from 'connected-react-router'
import RoutePublic from '../modules/RoutePublic'
import RoutePrivate from '../modules/RoutePrivate'
import { Route, Switch } from 'react-router'
import './App.css'
import Login from '../routes/Login'
import Home from '../routes/Home'
import NotFound from '../routes/NotFound'
import { Reducer } from 'redux'
import { History } from 'history'

import actions from '../actions/user'
import { RootProps } from '../@types/common'

const App:  React.FC<RootProps> = ({ history }: { history: History }) => {
    const router = useSelector((state: { router: Reducer<RouterState, LocationChangeAction> }) => state.router)
    console.log(router)
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)
    console.log('user',user)

    useEffect(() => {
        //Mount
        console.log('mount')
        dispatch(actions.login.started({ id: '1' }))
        return () => {
            //Unmount
            console.log('Unmount')
        }
    }, [])

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <RoutePublic
                    component={()=> (<Login/>)}
                    isAuthenticated={true}
                    path="/login"
                    exact
                />
                <RoutePrivate
                    component={Home}
                    isAuthenticated={false}
                    path="/home"
                    exact
                />
                <Route component={NotFound}/>
            </Switch>
        </ConnectedRouter>
    )
}


export default App