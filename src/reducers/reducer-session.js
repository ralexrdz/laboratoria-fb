export default function(state = 'ralex', action) {
	switch (action.type) {
		case 'SET_SESSION': 
      return action.payload
    default:
      return state
	}
}