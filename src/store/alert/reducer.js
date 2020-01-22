const INITAL_STATE = {
  data: null,
  reload: false
};

export default function modalReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case "@alert/SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "@modal/CLOSE":
      return {
        ...state,
        data: null
      };
    case "@alert/RELOAD":
      return {
        ...state,
        reload: !state.reload
      };
    default:
      return state;
  }
}
