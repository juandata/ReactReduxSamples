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
import { changeView } from "./actions";

function ChangeViewReducer(state = initialState, action) {
  switch (action.type) {
    case "Home":
      return Object.assign({}, state, {
        id: action.id
      });
    case "Page2":
      return Object.assign({}, state, {
        id: action.id
      });
    default:
      return state;
  }
  return state;
}
