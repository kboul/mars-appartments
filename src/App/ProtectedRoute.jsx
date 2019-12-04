/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isUserLoggedIn } from '../services/authService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!isUserLoggedIn())
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                // eslint-disable-next-line react/prop-types
                                state: { from: props.location }
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    render: PropTypes.func
};

export default ProtectedRoute;
