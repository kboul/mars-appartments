import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import Browse from './components/Browse/Browse';

import './App.sass';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/browse" component={Browse} />
				<Route path="/signin" component={SignIn} />
				<Redirect from="/" exact to="/signin" />
			</Switch>
		);
	}
}

export default App;
