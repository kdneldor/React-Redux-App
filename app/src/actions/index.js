import axios from "axios";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_JOKE_START = "FETCHING_JOKE_START";
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_ERROR = "FETCHING_JOKE_ERROR";

// Step 3: action creators
export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}

export const updateTitle = (newTitle) => {
  return { type: UPDATE_TITLE, payload: newTitle };
};

const headers = {
  Accept: "application/json",
};

export const getJoke = () => (dispatch) => {
  console.log("getJoke action");
  dispatch({ type: FETCHING_JOKE_START });
  axios
    .get("https://icanhazdadjoke.com/", { headers: headers })
    .then((res) => {
      dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data.joke });
      console.log("API Response: ", res);
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_JOKE_ERROR,
        payload: `${err.response.message} code: ${err.response.code}`,
      });
      console.log(err);
    });
};
