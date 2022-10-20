import React from "react";
import { useState } from "react";
import DIHome from "./DIHome";
import Employee from "./Employee";
import JobCatalog from "./JobCatalog";
import Location from "./Location";

const DataImport = () => {
  const [loadType, SetLoadType] = useState("Home");

  const handleLoadType = (loadType) => {
    SetLoadType(loadType);
  };

  return (
    <>
      {loadType === "Home" && <DIHome handleLoadType={handleLoadType} />}
      {loadType === "Employee" && <Employee handleLoadType={handleLoadType} />}
      {loadType === "Location" && <Location handleLoadType={handleLoadType} />}
      {loadType === "Jobcatalog" && (
        <JobCatalog handleLoadType={handleLoadType} />
      )}
    </>
  );
};

export default DataImport;
