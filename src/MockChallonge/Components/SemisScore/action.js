const updateFinals = (event) => ({
	type: 'UPDATE_FINALS',
	payload: {
		name: event.target.dataset.name,
		i: event.target.id
	}
})

export default updateFinals