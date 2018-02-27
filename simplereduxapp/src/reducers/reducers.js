import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/actions'


const { SHOW_ALL } = VisibilityFilters
 
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
 
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}
 
const todoApp = combineReducers({
  visibilityFilter,
  todos
})
 
export default todoApp





/*import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters } from "../actions/actions";

//establezco el estado inicial
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};
function todoApp(state = initialState, action) {
  Por ahora, no maneja ninguna acción
  // y solo devuelve el estado que recibimos.
  return state;
Ahora vamos a manejar SET_VISIBILITY_FILTER. Todo lo que necesitamos hacer es
cambiar la propiedad visibilityFilter en el estado. Fácil:
Nota que:

No modificamos el state. Creamos una copia con Object.assign().
Object.assign(state, { visibilityFilter: action.filter }) también estaría mal:
 esto modificaría el primer argumento. Debes mandar un objeto vacío como primer parámetro.
 También puedes activar la propuesta del operador spread para escribir { ...state, ...newState }.
Devolvemos el anterior state en el caso default. Es importarte devolver el anterior state por cualquier acción desconocida.

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
      case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
      case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
      })
      });
    default:
      return state;
  }
}

Un estupendo truco es usar la sintáxis de parámetros por defecto de ES6
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
