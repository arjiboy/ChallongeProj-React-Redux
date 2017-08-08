import React, {Component} from 'react';
import {Provider,connect} from 'react-redux'

class FinalsScore extends Component{
	render() {
	const arr = this.props.score
		return (
			<div className='col'>
				{
					arr.map(function(element,i){
						if(i%2 == 0){
							return (
									<div>
										<div className='finals-none'>|</div>
										<div className='score'>&#x021A3;</div>
									</div>
								)
						}
						else {
							return (
									<div className='score'>&#x021A3;</div>
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
		score: state.teams.finalsList
	}
}
const FinalsScoreCont = connect(mapStateToProps)(FinalsScore);

export default FinalsScoreCont; 