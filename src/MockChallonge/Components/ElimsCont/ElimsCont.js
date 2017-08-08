import React,{Component} from 'react';
import { Provider,connect } from 'react-redux';

class ElimsCont extends Component{
	render(){
		const self =this
		const elimsTeams = this.props.player
		return (
			<div className='col'>
				{
					elimsTeams.map(function(element,i){
						if (i%2 == 0){
							return (
									<div className='item' name={element} onMouseOver={self.props.handleHover}
										onMouseOut={self.props.handleHoverOut}>
										{element}
									</div>
								)
						}
						else {
							return (
								<div>
									<div className='item' name={element} onMouseOver={self.props.handleHover}
										onMouseOut={self.props.handleHoverOut}>
										{element}
									</div>
									<div className="none">.</div>
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
		player: state.teams.elimsList
	}
}

const ElimsContainer = connect(mapStateToProps)(ElimsCont);
export default ElimsContainer;