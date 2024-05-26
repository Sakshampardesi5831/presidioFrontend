// src/components/Header/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            "&:hover": { color: "#fff" },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/profile"
          sx={{
            "&:hover": { color: "#fff" },
          }}
        >
          Profile
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{
            "&:hover": { color: "#fff" },
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
