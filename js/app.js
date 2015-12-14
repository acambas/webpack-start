require ('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/scss/font-awesome.scss');
require('../css/app.scss');
const React = require('react');
const ReactDOM =  require('react-dom');

const Test =  require('./helloWorld') ;


ReactDOM.render(<Test sasa='Hello world ' /> , document.getElementById('app'));
