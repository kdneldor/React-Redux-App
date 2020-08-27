// Step 0: write and initialize the reducer

import {
    UPDATE_TITLE,
    TOGGLE_EDITING,
    FETCHING_JOKE_START,
    FETCHING_JOKE_SUCCESS,
    FETCHING_JOKE_ERROR,
    FETCHING_IMG_START,
    FETCHING_IMG_SUCCESS,
    FETCHING_IMG_ERROR
  } from "../actions";
  
  const initialState = {
    title: "A Rick and Morty Character!",
    editing: false,
    isFetching: false,
    error: "",
    joke: ""
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      case FETCHING_JOKE_START:
        console.log("fetching a name");
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_JOKE_SUCCESS:
        return { ...state, joke: action.payload, isFetching: false };
      case FETCHING_JOKE_ERROR:
        return { ...state, error: action.payload, isFetching: false };
        case FETCHING_IMG_START:
        console.log("fetching a name");
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_IMG_SUCCESS:
        return { ...state, img: action.payload, isFetching: false };
      case FETCHING_IMG_ERROR:
        return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
    }
  };
  