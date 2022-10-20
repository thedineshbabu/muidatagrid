import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Employee = ({ handleLoadType }) => {
  const initialRows = [
    {
      id: 1,
      jobCode: "ITEN01",
      locationCode: "L002",
      employeeId: "6578",
      firstName: "Dave",
      lastName: "Brock",
      email: "Dave.Brock@kf.com",
      jobTitle: "Product Manager I",
    },
    {
      id: 2,
      jobCode: "ITEN03",
      locationCode: "L005",
      employeeId: "6544",
      firstName: "Mark",
      lastName: "Henry",
      email: "Mark.Henry@kf.com",
      jobTitle: "Product Manager III",
    },
    {
      id: 3,
      jobCode: "ITEN09",
      locationCode: "L013",
      employeeId: "6543",
      firstName: "John",
      lastName: "Paul",
      email: "John.Paul@kf.com",
      jobTitle: "Developer",
    },
    {
      id: 4,
      jobCode: "ITED54",
      locationCode: "L234",
      employeeId: "6579",
      firstName: "Tim",
      lastName: "Bailey",
      email: "Tim.Bailey@kf.com",
      jobTitle: "Team Lead",
    },
    {
      id: 5,
      jobCode: "ITUX09",
      locationCode: "L989",
      employeeId: "8978",
      firstName: "Mike",
      lastName: "Paul",
      email: "Mike.Paul@kf.com",
      jobTitle: "Senior Consultant",
    },
  ];
  const columns = [
    {
      field: "jobCode",
      sortable: false,
      headerName: "Job Code",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "locationCode",
      sortable: false,
      headerName: "Location Code",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "employeeId",
      sortable: false,
      headerName: "Employee ID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "firstName",
      sortable: false,
      headerName: "First Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "lastName",
      sortable: false,
      headerName: "Last Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "email",
      sortable: false,
      headerName: "email",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "jobTitle",
      sortable: false,
      headerName: "Job Title",
      minWidth: 100,
      flex: 1,
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            variant="button"
            style={{ color: "#008369", cursor: "pointer" }}
            onClick={() => handleLoadType("Home")}
          >
            Data Import
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">ACME Industries</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Employee Library</Typography>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={8}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={initialRows} columns={columns} />
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default Employee;
