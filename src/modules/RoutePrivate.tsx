import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { History } from 'history'

interface OuterProps {
    location: History;
}

const RoutePrivate = ({ component: Component, isAuthenticated, ...rest }: { component: React.FC<any>, isAuthenticated: boolean, rest: any }) => (
    <Route
        {...rest}
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