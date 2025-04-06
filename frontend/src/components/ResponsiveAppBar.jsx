import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const pages = ["Home","Products", "About", "Contacts"];
const settings = ["Profile", "Dashboard", "Logout"];

function ResponsiveAppBar({ loggedUser }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    if (loggedUser !== "") {
      setLogged(true);
    }
  }, [loggedUser]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (clickedSetting) => {
    if (clickedSetting === "Logout") {
      setLogged(false);
      window.location.reload();
    }
  };

  return (
    <AppBar position="relative" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    textAlign="center"
                    variant="body2"
                    component={Link}
                    to="/cards"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/cards"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pet Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { md: "flex" }}}>
            <IconButton sx={{ pr: 3, columnGap: "5px" }}>
              <FavoriteBorderIcon
                style={{ color: "white" }}
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
              />
              <Link
                variant="body2"
                to="/wishlist"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                Wish list
              </Link>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { md: "flex" }}}>
            <IconButton sx={{ pr: 3, columnGap: "5px" }}>
              <ShoppingCartIcon
                style={{ color: "white" }}
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
              />
              <Link
                variant="body2"
                to="/cart"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                Cart
              </Link>
            </IconButton>
          </Box>

          {/* {logged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={loggedUser.substring(0, 1).toUpperCase().toString()}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: { md: "flex" } }}>
              <Link
                to="/login"
                sx={{ my: 2, color: "white", display: "block" }}
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                Login
              </Link>
            </Box>
          )} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
