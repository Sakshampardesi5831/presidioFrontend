import {} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#F4D03F",
        backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rentify
        </Typography>
        <Box>
          <Button color="inherit">Seller</Button>
          <Button color="inherit">Buyer</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
