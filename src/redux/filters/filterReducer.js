import { IS_FEATURE, IS_SEARCH } from "./actionType";

// initializeState
const initializeState = {
  featured: "All",
  searchText: "",
};

// reducer
const filterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case IS_FEATURE:
      return {
        ...state,
        featured: action.payload,
      };
    case IS_SEARCH:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
