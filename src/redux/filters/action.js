import { IS_FEATURE } from "./actionType";

export const isFeature = (status) => {
  return {
    type: IS_FEATURE,
    payload: status,
  };
};
