import React, {Component} from 'react';

class ResetBtn extends Component{
	reset(event){
		location.reload();
	}

	render() {
		return(
			<button onClick={this.reset}>
				Reset
			</button>
		)
	}
}


export default ResetBtn