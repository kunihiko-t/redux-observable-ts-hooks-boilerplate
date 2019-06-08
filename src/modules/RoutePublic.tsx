import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const RoutePublic = ({ component: Component, isAuthenticated, path, exact = false }: { component: React.FC<any>, isAuthenticated: boolean, path: string, exact?: boolean }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            isAuthenticated ? (
                <Redirect to="/home"/>
            ) : (
                <Component {...props} />
            )
        }
    />
)

RoutePublic.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

export default RoutePublic