import React, {Component} from 'react'
import { Provider,connect } from 'react-redux';
import updateList from './action'

class TourTeamsInput extends Component{
	render() {
		const num = "input " + this.props.num + " more name/s";
		return (
			<div>
				<p>Input Name:</p>
				<input onKeyPress={this.props.handlePress}
						placeholder={num}
						maxLength="12">						
				</input>
				<p>Teams/Players: 
					<strong>
						{this.props.length}
					</strong>
				</p>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		num: 8 - state.teams.inputList.length,
		length: state.teams.inputList.length
	}
}

function mapDispatchToProps(dispatch){
	return {
		handlePress: function(event){
			if (event.key === 'Enter' && event.target.value != ""){
				dispatch(updateList(event))
				event.target.value = ""
			}
		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(TourTeamsInput);