import { IS_FEATURE, IS_SEARCH, UPDATE_BOOK_BTN } from "./actionType";

// initializeState
const initializeState = {
  featured: "All",
  searchText: "",
  updateBtnData: {
    id: 0,
    btn: "Add Book",
    title: "Add New Book",
  },
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
    case UPDATE_BOOK_BTN:
      return {
        ...state,
        updateBtnData: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
