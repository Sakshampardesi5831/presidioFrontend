import { Box } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axiosInstance from "../../services/axiosConfig";
import { apiEndpoints } from "../../services/allEndpoints";
const DashBoard = () => {
  const [property, setProperty] = useState([]);
  const getAllProperty = async () => {
    const result = await axiosInstance.get(apiEndpoints.getAllProperty);
    console.log(result.data.data.options);
    setProperty(result.data.data.options);
  };

  useEffect(() => {
    getAllProperty();
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 55px)",
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
      </Box>
    </Fragment>
  );
};

export default DashBoard;
