import React, {Component} from 'react';

class FinalLine extends Component{
	render() {
		return (
			<div className='lines'>
				<div className="none-line">.</div>
				<svg height="180" width="20" className='line' >
    				<polyline points = "0,60 10,60 10,180 20,180" fill = "none" stroke = "white" stroke-width = "10"/>
				</svg>
				<svg height="180" width="20" className='line'>
    				<polyline points = "0,120 10,120 10,0 " fill = "none" stroke = "white" stroke-width = "10"/>
				</svg>
			</div>
		)
	}
}



export default FinalLine