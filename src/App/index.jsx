import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../Login';
import ProtectedRoute from './ProtectedRoute';
import Units from '../Units';

export default function App() {
    return (
        <Switch>
            <ProtectedRoute path="/units/:id" component={Units} />
            <ProtectedRoute path="/units" component={Units} />
            <Route path="/login" component={Login} />
            <Redirect from="/" exact to="/login" />
        </Switch>
    );
};

