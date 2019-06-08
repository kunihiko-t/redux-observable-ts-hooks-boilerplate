import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'


const RoutePrivate = ({ component: Component, isAuthenticated, path, exact = false }: { component: React.FC<any>, isAuthenticated: boolean, path: string, exact?: boolean }) => (
    <Route
        path={path}
        exact={exact}
        render={(props: any) =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            from: props.location.pathname,
                            isAuthenticated,
                        },
                    }}
                />
            )
        }
    />
)

RoutePrivate.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.object,
}

export default RoutePrivate