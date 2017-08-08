const InitialState = {
	temp: "FIGHT FIGHT FIGHT 2017",
	input: '',
	finalTitle: ""
}


function TitleReducer(state=InitialState,action){
	switch(action.type){
		case 'UPDATE_TITLE':
			return Object.assign({},state,{input: event.target.value},{temp: ""})
		case 'UPDATE_ELIMS':
			const title = Object.assign({},state,{finalTitle: state.input},{input: ""})
			return title
		default:
			return state;
	}
}

export default TitleReducer