import React, {Component} from 'react';
import {connect} from 'react-redux'
import updateElims from './action'

class GenerateBtn extends Component{
	render() {
		const state = this.props.teams
		return(
			<button onClick={this.props.handleClick}>
				Generate Matches
			</button>
		)
	}
}

function mapStateToProps(state){
	return {
		teams: state.teams.inputList
	}
}

function mapDispatchToProps(dispatch,ownProps){
	return {
		handleClick: function (event){
			dispatch(updateElims(event))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(GenerateBtn)