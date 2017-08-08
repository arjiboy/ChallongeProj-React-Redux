const InitialState = {
	inputList: [],
	elimsList : ["arjiboy.ix","babiDy","Crazee-9","DynaMight","elg33","f0x1898","gundamWin!","hollyBee"],
	semisList: ["arjiboy.ix","Crazee-9","elg33","gundamWin!"],
	finalsList: ["arjiboy.ix","elg33"]
}


function TeamsReducer (state= InitialState,action){
	switch (action.type){
		case 'UPDATE_LIST':
			{
				if (state.inputList.length < 8){
					const  list0 = [...state.inputList,action.payload]
					const updatedList = Object.assign({},state,{inputList: list0});
					return updatedList
				}
				return state
			}
			break;

		case 'DELETE_PLAYER':
			const x = [...state.inputList.slice(0,action.index),...state.inputList.slice(action.index + 1)]
			const y = Object.assign({},state,{inputList: x})
			return y

		case 'RANDOMIZE_TEAMS':
			let randomized = [];
			const teams = [...state.elimsList]
			while (randomized.length != 8){
				var randNum = Math.floor(Math.random()*teams.length);
				var choice = teams[randNum];
				if (!randomized.includes(choice)){
					randomized.push(choice);
				}
			}
			return Object.assign({},state,{elimsList: randomized})

		case 'UPDATE_ELIMS':
			{
				if (state.inputList.length == 8){
					const list1 = [...state.inputList]
					const w1 = ["waiting","waiting","waiting","waiting"]
					const w2 = ["waiting","waiting"]
					const updatedElims = Object.assign({},state,{inputList: []},{elimsList: list1},{semisList: w1},{finalsList: w2})
					return updatedElims
				}
				else {
					const num = 8 - state.inputList.length
					alert(`C\'mon! Give me something to work on!\n Please input ${num} more name/s.`)
					return state
				}
			}
			break;

		case 'UPDATE_SEMIS':
			const i = action.payload.i;
			const ind = i%2 == 0 ? i/2 : Math.floor(i/2);
			const list2 = [...state.semisList.slice(0,ind),action.payload.name,...state.semisList.slice(ind + 1)]
			const updatedSemis = Object.assign({},state,{semisList: list2});
			return updatedSemis

		case 'UPDATE_FINALS':
			const j = action.payload.i
			const indx = j%2 == 0 ? j/2 : Math.floor(j/2)
			const list3 = [...state.finalsList.slice(0,indx),action.payload.name,...state.finalsList.slice(indx+1)]
			const updatedFinals = Object.assign({},state,{finalsList: list3})
			return updatedFinals
			
		default:
			return state;
	}
}

export default  TeamsReducer;
