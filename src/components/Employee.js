import React from "react";

const Employee = ({ handleLoadType }) => {
  return (
    <>
      <p>this is a employee load</p>
      <button onClick={() => handleLoadType("Home")}>Back</button>
    </>
  );
};

export default Employee;
