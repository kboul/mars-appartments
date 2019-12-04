import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../Login';
import Units from '../Units';

const App = () => {
    return (
        <Switch>
            <ProtectedRoute path="/units/:id" component={Units} />
            <ProtectedRoute path="/units" component={Units} />
            <Route path="/login" component={Login} />
            <Redirect from="/" exact to="/login" />
        </Switch>
    );
};

export default App;
