import React, { Component } from 'react';
import './App.css';
import TourName from './Components/TourName/TourName'
import Dashboard from './Components/Dashboard/Dashboard'
import ElimsContainer from './Components/ElimsCont/ElimsCont'
import SemisContainer from './Components/SemisCont/SemisCont'
import FinalsContainer from './Components/FinalsList/FinalsList'
import ElimsScoreCont from './Components/ElimsScore/ElimsScore'
import SemisScoreCont from './Components/SemisScore/SemisScore'
import FinalsScoreCont from './Components/FinalsScore/FinalsScore'
import ElimLines from './Components/ElimLines/ElimLines'
import FinalLine from './Components/FinalLine/FinalLine'


class Container extends Component{
	constructor(props) {
		super(props);

		this.highlightSame = this.highlightSame.bind(this)
		this.unhighlightSame = this.unhighlightSame.bind(this)
	}
	
	highlightSame(event){
		const name = event.target.innerHTML
		const collection = document.getElementsByName(name)
		Array.prototype.map.call(collection,function(element){
			element.classList.add('change')
		})
	}
	unhighlightSame(event){
		const name = event.target.innerHTML
		const collection = document.getElementsByName(name)
		Array.prototype.map.call(collection,function(element){
			element.classList.remove('change')
		})
	}

	render() {
		return(
			<div>
				<h1>Tournament Bracket Generator</h1>
				<div className='container'>
					<div className='winner'></div>
					<TourName />
					<div className='col-container'>
						<Dashboard />
						<ElimsContainer  
									handleHover={this.highlightSame}
									handleHoverOut={this.unhighlightSame}/>
						<ElimsScoreCont />
						<ElimLines />
						<SemisContainer
									handleHover={this.highlightSame}
									handleHoverOut={this.unhighlightSame}/>
						<SemisScoreCont/>
						<FinalLine />
						<FinalsContainer
									handleHover={this.highlightSame}
									handleHoverOut={this.unhighlightSame}/>
						<FinalsScoreCont/>
					</div>
				</div>
				<footer><small><i>~rg</i></small></footer>
			</div>
		)
	}
}
export default Container;



/*
css
note flexbox

winner
effects*/
