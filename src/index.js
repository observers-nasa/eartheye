/*
 * Copyright (c) 2018 Bruce Schubert.
 * The MIT License
 * http://www.opensource.org/licenses/mit-license
 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Favicon from 'react-favicon';
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'
import Intro from './Intro'
import About from './About'

ReactDOM.render(
    <div>
      <Favicon url="/images/earth_eye.ico" />
      <BrowserRouter>
        <Switch>
            <Route path="/globe" exact={true} component={App} />
            <Route path="/" exact={true} component={Intro} />
            <Route path="/about" component={About} />
        </Switch>
    </ BrowserRouter>
    </div>
    , document.getElementById('root'))
