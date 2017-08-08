const updateSemis = (event) => ({
	type: 'UPDATE_SEMIS',
	payload: {
		name: event.target.dataset.name,
		i: event.target.id
	}
})

export default updateSemis;

