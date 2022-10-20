import React from "react";

const Location = ({ handleLoadType }) => {
  return (
    <>
      <p>this is a Location load</p>
      <button onClick={() => handleLoadType("Home")}>Back</button>
    </>
  );
};

export default Location;
