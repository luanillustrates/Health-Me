import Auth from '../utils/auth';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../assets/images/healthme_logo.png';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

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
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={RouterLink} to="/account">
              Account
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
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            component={RouterLink}
            href="#app-bar-with-responsive-menu"
            to="/"
          >
            <img src={logo} alt="" width="120em" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="black"
            >
              <MenuIcon />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem component={RouterLink} to="/services">
                  Services
                </MenuItem>
                <MenuItem component={RouterLink} to="/contact">
                  Contact
                </MenuItem>
              </Menu>
            </IconButton>
          </Box>

          <Link
            noWrap
            component={RouterLink}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
            href="#app-bar-with-responsive-menu"
            to="/"
          >
            <img src={logo} alt="logo image" width="120em" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={RouterLink} to="/services">
              Services
            </Button>
            <Button component={RouterLink} to="/contact">
              Contact
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}></IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            ></Menu>
          </Box>
          {showNav()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
