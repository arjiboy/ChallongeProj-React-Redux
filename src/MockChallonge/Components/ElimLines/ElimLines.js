import React, {Component} from 'react';

class ElimLines extends Component{
	render() {
		return (
			<div className='lines'>
				<div className="none-line">.</div>
				<svg height="60" width="20" className='line'>
    				<polyline points = "0,0 10,0 10,60 20,60" fill = "none" stroke = "white" stroke-width = "10"/>
				</svg>
				<svg height="148" width="20" className='line'>
    				<polyline points = "10,0  10,60 0,60" fill = "none" stroke = "white" stroke-width = "10"/>
				</svg>
				
				<div className="none-line">.</div>
				<svg height="60" width="20" className='line'>
    				<polyline points = "0,0 10,0 10,60 20,60" fill = "none" stroke = "white" stroke-width = "10"/>
				</svg>
				<svg height="144" width="20" className='line'>
    				<polyline points = "10,0  10,60 0,60" fill = "none" stroke = "white" stroke-width = "10"/>
				</svg>
			</div>
		)
	}
}



export default ElimLines