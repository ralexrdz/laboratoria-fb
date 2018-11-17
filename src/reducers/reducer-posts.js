export default function(
  state = [
    {
      id: 'cjld2cjxh0000qzrmn831i7rn',
      author: 'ralex',
      text: 'Hola mundo',
      created: new Date(2018, 10, 15, 11, 11, 11)
    },{
      id: 'cjld2cjxh0000qzrmn831i7ra',
      author: 'alguien',
      text: 'Puedes hacer una prueba',
      created: new Date(2018, 10, 15, 10, 10, 10)
    },{
      id: 'cjld2cjxh0000qzrmn831i7rb',
      author: 'admin',
      text: 'Alguien ya la cagó',
      created: new Date(2018, 10, 15, 9, 9, 9)
    }
  ], 
  action) {
	switch (action.type) {
    case 'ADD_POST': 
      return [action.payload, ...state]
    case 'REMOVE_POST': 
      return 
    case 'UPDATE_POST':
      let oldPost = Object.assign({},state.find(el => el.id === action.payload.id))
      oldPost.text = action.payload.text
      return [oldPost, ...state.filter(el => el.id !== action.payload.id)]
    default:
      return state
	} 
}