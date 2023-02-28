import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from "./actionType";

export const loadedBook = (bookData) => {
  return {
    type: LOADED_BOOK,
    payload: bookData,
  };
};

export const addBook = (bookData) => {
  return {
    type: ADD_BOOK,
    payload: bookData,
  };
};

export const updateBook = (bookData) => {
  return {
    type: UPDATE_BOOK,
    payload: bookData,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};
