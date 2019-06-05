import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const RoutePublic = ({ component: Component, isAuthenticated, ...rest }: { component: React.FC<any>, isAuthenticated: boolean, rest: any }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <Redirect to="/private"/>
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