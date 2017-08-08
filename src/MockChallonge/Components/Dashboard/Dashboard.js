import React, {Component} from 'react';
import TourNameInput from '../TourNameInput/TourNameInput'
import TourTeamsInput from '../TourTeamsInput/TourTeamsInput'
import TourPlayer from '../TourPlayer/TourPlayer'
import GenerateBtn from '../GenerateBtn/GenerateBtn'
import RandomizeBtn from '../RandomizeBtn/RandomizeBtn'
import ResetBtn from '../ResetBtn/ResetBtn'

class Dashboard extends Component{
	render() {
		return(
			<div className='col dashb'>
				<TourNameInput />
				<TourTeamsInput />
				<TourPlayer />
				<div className='buttons'>
					<GenerateBtn />
					<RandomizeBtn />
					<ResetBtn/>
				</div>
			</div>
		)
	}
}


export default Dashboard;