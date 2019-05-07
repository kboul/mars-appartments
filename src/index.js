import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.sass'

import 'bootstrap/dist/js/bootstrap.js'

import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)

serviceWorker.unregister()