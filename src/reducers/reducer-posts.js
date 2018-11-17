export default function(
  state = [
    {
      id: 'cjld2cjxh0000qzrmn831i7sa',
      author: 'ralex',
      text: 'Hola, React! No sé por qué no te había puesto atención antes',
      created: new Date(2018, 10, 17, 3, 11, 11)
    },
    {
      id: 'cjld2cjxh0000qzrmn831i7rz',
      author: 'ralex',
      text: 'Debí de haber pedido más tiempo...',
      created: new Date(2018, 10, 16, 11, 11, 11)
    },{
      id: 'cjld2cjxh0000qzrmn831i7rs',
      author: 'ralex',
      text: '¿Qué tan difícil podría ser aprender y hacer la prueba en un día?',
      created: new Date(2018, 10, 15, 11, 11, 11)
    },{
      id: 'cjld2cjxh0000qzrmn831i7rn',
      author: 'ralex',
      text: 'Wups! De los frameworks de JS que conozco, React es el que menos he manejado',
      created: new Date(2018, 10, 15, 11, 11, 11)
    },{
      id: 'cjld2cjxh0000qzrmn831i7ra',
      author: 'alguien',
      text: '¿Puedes hacer la prueba para el jueves?',
      created: new Date(2018, 10, 15, 10, 10, 10)
    },{
      id: 'cjld2cjxh0000qzrmn831i7rb',
      author: 'admin',
      text: 'Simulación de FB con React sería un buena prueba',
      created: new Date(2018, 9, 15, 9, 9, 9)
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