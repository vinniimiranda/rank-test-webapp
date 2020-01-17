const INITAL_STATE = {
  open: true
};

export default function modalReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case "@modal/OPEN":
      return {
        ...state,
        open: true
      };
    case "@modal/CLOSE":
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
