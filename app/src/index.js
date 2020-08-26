import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { appReducer } from "./reducers";
import thunk from "redux-thunk";

import Title from "./components/Title";
import Joke from "./components/Joke";
import "./styles.css";

// Step 1: create the store
let store = createStore(appReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Title />
      <Joke />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  // Step 2: provide the store
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

