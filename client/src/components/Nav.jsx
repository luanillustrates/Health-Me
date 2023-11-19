import Auth from "../utils/auth";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/images/healthme_logo.png";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

const pages = ["Services", "Contact"];

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function showNav() {
    // displays login options when logged in
    if (Auth.loggedIn()) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={RouterLink} to="/profile">
              Profile
            </MenuItem>
            <MenuItem component={RouterLink} to="/dashboard">
              Dashboard
            </MenuItem>
            <MenuItem onClick={() => Auth.logout()}>Logout</MenuItem>
          </Menu>
        </Box>
      );
    } else {
      // displays login button when not logged in
      return (
        <Link component={RouterLink} to="/login">
          <Button>Login</Button>
        </Link>
      );
    }
  }

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          <Link
            component={RouterLink}
            href="#app-bar-with-responsive-menu"
            to="/"
          >
            <img src={logo} alt="" width="120em" />
          </Link>
          {/* Navbar Href */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleMenuClose}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {showNav()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
