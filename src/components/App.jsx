import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from '../common/ProtectedRoute';
import SignIn from './SignIn';
import Units from './Units';

const App = () => {
    return (
        <Switch>
            <ProtectedRoute path="/units/:id" component={Units} />
            <ProtectedRoute path="/units" component={Units} />
            <Route path="/signin" component={SignIn} />
            <Redirect from="/" exact to="/signin" />
        </Switch>
    );
};

export default App;
