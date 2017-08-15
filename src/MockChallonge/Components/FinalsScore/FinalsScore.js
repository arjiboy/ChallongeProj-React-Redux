import React, {Component} from 'react';
import {Provider,connect} from 'react-redux'
import {updateWinner} from './action'

class FinalsScore extends Component{
	render() {
	const arr = this.props.score
	const self = this
		return (
			<div className='col'>
				{
					arr.map(function(element,i){
						if(i%2 == 0){
							return (
									<div>
										<div className='finals-none'>|</div>
										<div className='score' data-name={element} id={i} 
												onClick={self.props.handleClick}>&#x021A3;</div>
									</div>
								)
						}
						else {
							return (
									<div className='score' data-name={element} id={i} 
												onClick={self.props.handleClick}>&#x021A3;</div>
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
const mapDispatchToProps = ({
	handleClick: updateWinner
})
const FinalsScoreCont = connect(mapStateToProps,mapDispatchToProps)(FinalsScore);

export default FinalsScoreCont; 