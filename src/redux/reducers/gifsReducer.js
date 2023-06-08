import { REQUEST_GIFS, TRENDING_GIFS, RECENT_GIFS } from "../constants";

const initialState = {
  data: [],
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        data: action.payload,
      };
    case RECENT_GIFS:
      return {
        ...state,
        data: action.payload,
      };
    case TRENDING_GIFS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
