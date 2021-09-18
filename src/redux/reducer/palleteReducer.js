import { GET_PALLETE_DETAIL } from "../types";
import pallete from "../../data/initialPallete.json";

const initialState = {
  palletes: pallete.pallete,
  palleteDetail: null,
};

export default function palleteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PALLETE_DETAIL:
      return {
        ...state,
        palleteDetail: action.payload,
      };

    default:
      return state;
  }
}
