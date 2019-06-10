import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import RoutePublic from '../modules/RoutePublic'
import RoutePrivate from '../modules/RoutePrivate'
import { Route, Switch } from 'react-router'
import Login from '../routes/Login'
import Home from '../routes/Home'
import Top from '../routes/Top'
import NotFound from '../routes/NotFound'
import { History } from 'history'
import { RootProps } from '../@types/common'
import { Container } from 'semantic-ui-react'
import RenderProps from '../routes/RenderProps'

const App: React.FC<RootProps> = ({ history }: { history: History }) => {
    const user = useSelector((state: any) => state.user)

    useEffect(() => {
        //Mount
        console.log('mount')
        return () => {
            //Unmount
            console.log('Unmount')
        }
    }, [])

    return (
        <ConnectedRouter history={history}>
            <Container>
                <Switch>
                    <Route exact path="/" component={Top}/>
                    <RoutePublic
                        component={() => (<Login/>)}
                        isAuthenticated={user.isAuthenticated}
                        path="/login"
                        exact
                    />
                    <RoutePrivate
                        component={Home}
                        isAuthenticated={user.isAuthenticated}
                        path="/home"
                        exact
                    />
                    <RoutePrivate
                        component={RenderProps}
                        isAuthenticated={user.isAuthenticated}
                        path="/renderProps"
                        exact
                    />
                    <Route component={NotFound}/>
                </Switch>
            </Container>
        </ConnectedRouter>
    )
}


export default App