import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";

const Joke = ({ getJoke, joke, isFetching }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getJoke();
  }, [getJoke]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Character Name: {joke} </h2>
      {/* <button onClick={getJoke}>Get new joke</button> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return { joke: state.joke, isFetching: state.isFetching };
};

const mapDispatchToProps = { getJoke };

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
