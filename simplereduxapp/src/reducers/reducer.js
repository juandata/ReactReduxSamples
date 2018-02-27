import { VisibilityFilters } from "../actions/actions";

//establezco el estado inicial
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};
function todoApp(state = initialState, action) {
  /*Por ahora, no maneja ninguna acción
  // y solo devuelve el estado que recibimos.
  return state;
Ahora vamos a manejar SET_VISIBILITY_FILTER. Todo lo que necesitamos hacer es
cambiar la propiedad visibilityFilter en el estado. Fácil:
Nota que:

No modificamos el state. Creamos una copia con Object.assign().
Object.assign(state, { visibilityFilter: action.filter }) también estaría mal:
 esto modificaría el primero argumento. Debes mandar un objeto vacío como primer parámetro.
 También puedes activar la propuesta del operador spread para escribir { ...state, ...newState }.
Devolvemos el anterior state en el caso default. Es importarte devolver el anterior state por cualquier acción desconocida.
  */
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}

/*Un estupendo truco es usar la sintáxis de parámetros por defecto de ES6
para hacer lo siguiente de forma más compacta arriba en el reducer todoApp:
function todoApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  // Por ahora, no maneja ninguna acción
  // y solo devuelve el estado que recibimos.
  return state;
}
*/
