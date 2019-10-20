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

import App from './App'

ReactDOM.render(
<div>
    <Favicon url="/images/earth_eye.ico" />
    <App/>
</div>, document.getElementById('root'))
