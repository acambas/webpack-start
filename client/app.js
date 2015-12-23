import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss'
import '../style/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './helloWorld';


ReactDOM.render(<HelloWorld message='Hello world' /> , document.getElementById('app'));
