import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookReducer from "./books/bookReducer";

const store = createStore(
  bookReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
