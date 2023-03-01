import { IS_FEATURE } from "./actionType";

// initializeState
const initializeState = {
  featured: "All",
};

// reducer
const filterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case IS_FEATURE:
      return {
        ...state,
        featured: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
