import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../css/app.scss';
import {Test} from './helloWorld';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Test sasa='Hello world' /> , document.getElementById('app'));
