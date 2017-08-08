import React, {Component} from 'react';
import {connect} from 'react-redux';
import deletePlayer from './action'

class TourPlayer extends Component{
	render() {
		const teams = this.props.player
		const self = this
		return(
			<div>
				{
				teams.map(function (element,i){
					return (
						<div onClick={self.props.handleClick} className='player' id={i}>{element}</div>
						)
				})
				}
			</div>
		)
	}	
}

function mapStateToProps(state){
	return {
		player: state.teams.inputList
	}
}

function mapDispatchToProps(dispatch){
	return {
		handleClick: function(event){
			dispatch(deletePlayer(event))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TourPlayer);

