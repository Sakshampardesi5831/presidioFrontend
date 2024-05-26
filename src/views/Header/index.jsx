// src/components/Header/Header.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar sx={{}}>
      <Container>
        <Toolbar
          sx={{
            px: "0px !important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
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
          </Box>
          <Box>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
