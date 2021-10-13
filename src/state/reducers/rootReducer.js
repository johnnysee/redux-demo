import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_GREETING":
      return {
        ...state,
        greeting: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
