const InitialState = {
	temp: "BEST OF THE BEST 2017",
	input: '',
	finalTitle: ""
}


function TitleReducer(state=InitialState,action){
	switch(action.type){
		case 'UPDATE_TITLE':
			{
				if (action.payload != ""){
					return Object.assign({},state,{input: event.target.value},{temp: ""},{finalTitle: ""})
				}
				else{
					return InitialState
				}
			}
		case 'UPDATE_ELIMS':
			const title = Object.assign({},state,{finalTitle: state.input},{input: ""})
			return title
		default:
			return state;
	}
}

export default TitleReducer