export const updateWinner = (event) => ({
	type: 'UPDATE_WINNER',
	payload: event.target.dataset.name
})

