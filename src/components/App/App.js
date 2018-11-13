import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProtectedRoute from '../../common/ProtectedRoute';
import SignIn from '../../components/SignIn/SignIn';
import Units from '../../components/Units/Units';

import './App.sass';

class App extends Component {
	render() {
		return (
			<Switch>
				<ProtectedRoute path="/units/:id" component={Units} />
				<ProtectedRoute path="/units" component={Units} />
				<Route path="/signin" component={SignIn} />
				<Redirect from="/" exact to="/signin" />
			</Switch>
		);
	}
}

export default App;
