import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIMG } from "../actions";

const IMG = ({ getIMG, img, isFetching }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getIMG();
  }, [getIMG]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        {img} 
      </div>
       
    </>
  );
};

const mapStateToProps = (state) => {
  return { img: state.img, isFetching: state.isFetching };
};

const mapDispatchToProps = { getIMG };

export default connect(mapStateToProps, mapDispatchToProps)(IMG);