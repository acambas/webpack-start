import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../css/app.scss';
import {Test} from './helloWorld';

import React from 'react';
import ReactDOM from 'react-dom';

// const Test = React.createClass({
// 	render:function(){
// 		return <div className={'fa fa-camera-retro fa-lg'}> 
// 		{this.props.sasa}
// 		</div>
// 	}
// });


ReactDOM.render(<Test sasa='Hell world' /> , document.getElementById('app'));
