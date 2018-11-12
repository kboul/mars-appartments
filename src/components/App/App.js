import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProtectedRoute from '../../common/ProtectedRoute';
import SignIn from '../../components/SignIn/SignIn';
import Browse from '../../components/Browse/Browse';

import './App.sass';

class App extends Component {
	render() {
		return (
			<Switch>
				<ProtectedRoute path="/browse/:id" component={Browse} />
				<ProtectedRoute path="/browse" component={Browse} />
				<Route path="/signin" component={SignIn} />
				<Redirect from="/" exact to="/signin" />
			</Switch>
		);
	}
}

export default App;
