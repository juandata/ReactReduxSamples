/*
 * tipos de acciones
 Las acciones son un bloque de información que envia datos desde tu aplicación a tu store.
 Son la única fuente de información para el store. Las envias al store usando store.dispatch().
 Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de
 la aplicación en respuesta. Esto es trabajo de los reducers.
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * otras constantes
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

/*
 * creadores de acciones
 En redux los creadores retornan una acción. Esto las
 hace más portables y fáciles de probar. Para efectivamente iniciar
  un despacho, pasa el resultado a la función dispatch():
 dispatch(addTodo(text))
dispatch(completeTodo(index))

Alternativamente, puedes crear un creador de acciones conectados que despache automaticamente:

const boundAddTodo = (text) => dispatch(addTodo(text))
const boundCompleteTodo = (index) => dispatch(completeTodo(index))

La función dispatch() puede ser accedida directamente desde el store como store.dispatch(),
pero comunmente vas a querer usar utilidades como connect() de react-redux. Puedes usar bindActionCreators()
para automaticamente conectar muchos creadores de acciones a dispatch().
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
