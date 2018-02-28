export  const change_View = "Change_View";

export function changeView(id) {
  return {
    type: change_View,
    payload : id
  };
}
