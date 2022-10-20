import React from "react";

const JobCatalog = ({ handleLoadType }) => {
  return (
    <>
      <p>this is a JobCatalog load</p>
      <button onClick={() => handleLoadType("Home")}>Back</button>
    </>
  );
};

export default JobCatalog;
