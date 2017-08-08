import React, {Component} from 'react';
import {connect} from 'react-redux'

class TourName extends Component{
	render() {
		return (
			<h2 className='matchTitle'>
				{this.props.input}{this.props.matchTitle}{this.props.temp}
			</h2>
		)
	}
}

function mapStateToProps(state){
	return {
		temp: state.title.temp,
		input: state.title.input,
		matchTitle: state.title.finalTitle
	}
}

export default connect(mapStateToProps)(TourName)