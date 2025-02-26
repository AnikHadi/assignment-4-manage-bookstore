import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import filterReducer from "./filters/filterReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  featured: filterReducer,
});

export default rootReducer;
