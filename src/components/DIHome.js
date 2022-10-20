import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import Typography from "@mui/material/Typography";

const DIHome = ({ handleLoadType }) => {
  const [locationMessage, setLocationMessage] = useState("Sync");
  const [employeeMessage, setEmployeeMessage] = useState("Sync");
  const [jobCatalogMessage, setJobCatalogMessage] = useState("Sync");
  const [uploadType, setUploadType] = useState("");

  const [locationDownloadMessage, setLocationDownloadMessage] =
    useState("Download");
  const [employeeDownloadMessage, setEmployeeDownloadMessage] =
    useState("Download");
  const [jobCatalogDownloadMessage, setJobCatalogDownloadMessage] =
    useState("Download");

  const [locationUploadMessage, setLocationUploadMessage] = useState("Upload");
  const [employeeUploadMessage, setEmployeeUploadMessage] = useState("Upload");
  const [jobCatalogUploadMessage, setJobCatalogUploadMessage] =
    useState("Upload");

  const [syncMessage, setSyncMessage] = useState("");

  const TYPE_LOCATION = "Location";
  const TYPE_EMPLOYEE = "Employee";
  const TYPE_JOB_CATALOG = "Jobcatalog";

  const initialRows = [
    {
      id: 1,
      fileType: "Location",
      fileName: "",
      lastUpdatedOn: "",
      lastSyncedOn: "",
      totalRecord: 0,
      sync: { displayName: "Sync" },
    },
    {
      id: 2,
      fileType: "Jobcatalog",
      fileName: "",
      lastUpdatedOn: "",
      lastSyncedOn: "",
      totalRecord: 0,
      sync: { displayName: "Sync" },
    },
    {
      id: 3,
      fileType: "Employee",
      fileName: "",
      lastUpdatedOn: "",
      lastSyncedOn: "",
      totalRecord: 0,
      sync: { displayName: "Sync" },
    },
  ];

  const columns = [
    {
      field: "fileType",
      sortable: false,
      headerName: "Data type",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography
              key={params.row.fileType + "_" + "ft"}
              variant="button"
              style={{ color: "#008369", cursor: "pointer" }}
              onClick={() => handleLoadTypeClick(params)}
            >
              {params.row.fileType}
            </Typography>
          </>
        );
      },
    },
    {
      field: "fileName",
      sortable: false,
      headerName: "File Name",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "lastUpdatedOn",
      sortable: false,
      headerName: "Last Updated",
      minWidth: 250,
      flex: 1,
      valueFormatter: (params) =>
        params && params.value
          ? moment(params?.value).format("MMM Do YYYY, h:mm:ss")
          : "",
    },
    {
      field: "lastSyncedOn",
      sortable: false,
      headerName: "Last Synced",
      minWidth: 250,
      flex: 1,
      valueFormatter: (params) =>
        params && params.value
          ? moment(params?.value).format("MMM Do YYYY, h:mm:ss")
          : "",
    },
    {
      field: "totalRecord",
      sortable: false,
      headerName: "Records",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "sync",
      headerName: "",
      sortable: false,
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography
              key={params.row.fileType + "_" + "sync"}
              variant="button"
              style={{ color: "#008369", cursor: "pointer" }}
              // onClick={() => handleSync(params)}
            >
              {params.row.fileType === TYPE_LOCATION && locationMessage}
              {params.row.fileType === TYPE_JOB_CATALOG && jobCatalogMessage}
              {params.row.fileType === TYPE_EMPLOYEE && employeeMessage}
            </Typography>
          </>
        );
      },
    },
    {
      field: "download",
      headerName: "",
      sortable: false,
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography
              key={params.row.fileType + "_" + "dld"}
              variant="button"
              style={{
                color: "#008369",
                cursor: `${params.row.fileName ? "pointer" : "not-allowed"}`,
                pointerEvents: `${params.row.fileName ? "inherit" : "none"}`,
                WebkitFilter: `${
                  params.row.fileName ? "inherit" : "invert(40%)"
                }`,
              }}
              // onClick={() => handleDownload(params)}
            >
              {params.row.fileType === TYPE_LOCATION && locationDownloadMessage}
              {params.row.fileType === TYPE_JOB_CATALOG &&
                jobCatalogDownloadMessage}
              {params.row.fileType === TYPE_EMPLOYEE && employeeDownloadMessage}
            </Typography>
          </>
        );
      },
    },
    {
      field: "upload",
      headerName: "",
      sortable: false,
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography
              key={params.row.fileType + "_" + "uld"}
              variant="button"
              // TODO: Rework on logic once upload api is available thr' APIM
              style={{
                color: "#008369",
                cursor: `${params.row.fileName ? "pointer" : "not-allowed"}`,
                pointerEvents: `${params.row.fileName ? "inherit" : "none"}`,
                WebkitFilter: `${
                  params.row.fileName ? "inherit" : "invert(40%)"
                }`,
              }}
              // onClick={() => {
              //   hiddenFileInput.current.value = null;
              //   handleUpload(params);
              // }}
            >
              {params.row.fileType === TYPE_LOCATION && locationUploadMessage}
              {params.row.fileType === TYPE_JOB_CATALOG &&
                jobCatalogUploadMessage}
              {params.row.fileType === TYPE_EMPLOYEE && employeeUploadMessage}
            </Typography>
          </>
        );
      },
    },
  ];

  const handleLoadTypeClick = (params) => {
    // alert(params.row.fileType);
    handleLoadType(params.row.fileType);
  };

  return (
    <>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={initialRows} columns={columns} hideFooter />
      </div>
    </>
  );
};

export default DIHome;
