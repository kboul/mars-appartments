import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './sass/index.sass';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
