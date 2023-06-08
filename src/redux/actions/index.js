import request from "superagent";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  RECENT_GIFS,
  REQUEST_GIFS,
  TRENDING_GIFS,
} from "../constants";

const API_URL = "http://api.giphy.com/v1/gifs/search?";
const API = "https://api.giphy.com/v1/gifs/trending?";
const API_KEY = "&api_key=Qt1tafb8YVEBFtHcMMQPwWomowh98gPT";
const SORT_OPTION = "rating=pg-13&offset=0&type=gifs&q=cats%20dogs";

export function requestGifs(term = null) {
  return function (dispatch) {
    request
      .get(`${API_URL}q=${term.replace(/\s/g, "+")}${API_KEY}`)
      .then((response) => {
        dispatch({
          type: REQUEST_GIFS,
          payload: response.body.data,
        });
      });
  };
}

export function trendingGifs() {
  return function (dispatch) {
    request.get(`${API}${API_KEY}`).then((response) => {
      dispatch({
        type: TRENDING_GIFS,
        payload: response?.body?.data,
      });
    });
  };
}

export function recentGifs() {
  return function (dispatch) {
    request.get(`${API_URL}${SORT_OPTION}${API_KEY}`).then((response) => {
      dispatch({
        type: RECENT_GIFS,
        payload: response.body.data,
      });
    });
  };
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
