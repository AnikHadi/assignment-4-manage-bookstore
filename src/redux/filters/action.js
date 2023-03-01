import { IS_FEATURE, IS_SEARCH } from "./actionType";

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
