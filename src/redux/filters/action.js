import { IS_FEATURE, IS_SEARCH, UPDATE_BOOK_BTN } from "./actionType";

export const isFeature = (status) => {
  return {
    type: IS_FEATURE,
    payload: status,
  };
};

export const isSearch = (text) => {
  return {
    type: IS_SEARCH,
    payload: text,
  };
};

export const updateBookBtn = (text) => {
  return {
    type: UPDATE_BOOK_BTN,
    payload: text,
  };
};
