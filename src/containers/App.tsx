import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import RoutePublic from '../modules/RoutePublic'
import RoutePrivate from '../modules/RoutePrivate'
import { Route, Switch } from 'react-router'
import './App.css'
import Login from '../routes/Login'
import Home from '../routes/Home'
import NotFound from '../routes/NotFound'
import { parse } from 'query-string'
import { Dispatch } from 'redux'
import { History } from 'history'

const App = ({ history }: { dispatch: Dispatch, history: History }) => {
    const query = parse(history.location.search)
    const [installationID] = useState(query['installation_id'])

    useEffect(() => {
        //Mount
        console.log('mount')
        return () => {
            //Unmount
            console.log('Unmount')
        }
    }, [])

    const authenticated = installationID ? true : false
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <RoutePublic
                    component={Login}
                    isAuthenticated={authenticated}
                    path="/login"
                    exact
                />
                <RoutePrivate
                    component={Home}
                    isAuthenticated={authenticated}
                    path="/home"
                    exact
                />
                <Route component={NotFound}/>
            </Switch>
        </ConnectedRouter>
    )
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

App.defaultProps = {}

function mapStateToProps(state) {
    return {
        router: state.router,
    }
}

export default connect(mapStateToProps)(App)