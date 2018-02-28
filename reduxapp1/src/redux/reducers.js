/*
object representation of menu changeView
{
  visibility : true,
  id : uid
}
la visibilidad indicará que el elemento debe renderizarse y el id indicará el uid del elemento dentro del array de items

LA LÓGICA SERÍA SI
id = home entonces renderizar en section Home
si id = page2 entonces renderizar page2

*/
import { change_View } from "./actions";



export default function ChangeViewReducer(state = { menu: ''}, action) {
  switch (action.type) {
    case change_View:
      return Object.assign({}, state, {
        menu: action.payload
      });
    default:
      return state;
  }
}
