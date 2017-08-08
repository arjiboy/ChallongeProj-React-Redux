const deletePlayer = (event) => ({
	type: 'DELETE_PLAYER',
	index: Number(event.target.id)
})

export default deletePlayer