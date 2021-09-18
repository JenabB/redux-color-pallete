import { GET_PALLETE_DETAIL } from "./types";

export const getPalleteDetail = (pallete) => ({
  type: GET_PALLETE_DETAIL,
  payload: pallete,
});
