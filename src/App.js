import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';

import './App.sass';

class App extends Component {
	render() {
		return (
			<Switch>
				{/* <Route path="/browse" component={Browse} /> */}
				<Redirect from="/" exact to="/signin" />
				<Route path="/signin" component={SignIn} />
			</Switch>
		);
	}
}

export default App;
