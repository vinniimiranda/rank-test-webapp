export function alertSetData(data) {
  return {
    type: "@alert/SET_DATA",
    payload: data
  };
}

export function reloadAlerts() {
  return {
    type: "@alert/RELOAD"
  };
}
