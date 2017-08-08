import React, {Component} from 'react';
import {connect} from 'react-redux';
import updateTitle from './action'

class TourNameInput extends Component{
	render() {
		return(
			<div>
				<p>Tournament Name:</p>
				<input 
					value={this.props.val} 
					onChange={this.props.handleChange}
					maxLength="45">
				</input>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		val: state.title.input
	}
}

function mapDispatchToProps(dispatch){
	return {
		handleChange: function(event){
			dispatch(updateTitle(event))
		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(TourNameInput) 