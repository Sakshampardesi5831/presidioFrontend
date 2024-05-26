// src/views/Profile.jsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Header from "../Header";

const Profile = () => {
  return (
    <>
      <Header />
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            User Profile
          </Typography>
          <Typography variant="body1">
            <strong>First Name:</strong> user.firstname
          </Typography>
          <Typography variant="body1">
            <strong>Last Name:</strong> user.lastname
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> user.email
          </Typography>
          <Typography variant="body1">
            <strong>Type:</strong>Buyers
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
