import React from 'react';

const Test = React.createClass({
	render:function(){
		return <div className={'fa fa-camera-retro fa-lg'}> 
		{this.props.sasa}
		</div>
	}
});

export  {Test};