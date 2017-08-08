import React, {Component} from 'react';
import { connect } from 'react-redux';
import randomizeTeams from './action'

class RandomizeBtn extends Component{
	render() {
		return(
			<button id='random' onClick={this.props.handleClick}>
				Random Arrange Elims
			</button>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		handleClick: function (event){
			dispatch(randomizeTeams(event))
		}
	}
}

export default connect(null,mapDispatchToProps)(RandomizeBtn)

