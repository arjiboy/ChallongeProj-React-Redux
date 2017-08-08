import React, {Component} from 'react';
import {connect} from 'react-redux';
import updateSemis from './action'

class ElimsScore extends Component{
	render() {
	const self = this
	const arr = this.props.score
		return (
			<div className='col'>
				{
					arr.map(function(element,i){
						if(i%2 == 0){
							return (
									<div className='score' data-name={element} id={i} 
										onClick={self.props.handleClick}>
										&#x021A3;</div>
								)
						}
						else {
							return (
									<div>
										<div className='score' data-name={element} id={i} 
											onClick={self.props.handleClick}>&#x021A3;</div>
										<div className='none'>|</div>
									</div>
								)
						}
					})
				}
			</div>
			)
	}
}


function mapStateToProps(state){
	return {
		score: state.teams.elimsList
	}
}
function mapDispatchToProps(dispatch){
	return {
		handleClick: function(event){
			dispatch(updateSemis(event))
			document.getElementById('random').disabled = true
		}
	}
}

const ElimsScoreCont = connect(mapStateToProps,mapDispatchToProps)(ElimsScore);

export default ElimsScoreCont; 