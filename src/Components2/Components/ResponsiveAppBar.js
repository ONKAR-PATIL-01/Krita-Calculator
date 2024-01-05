import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../krita.svg";

const pages = ["schedule a demo", "pricing", "about"];

const pageUrls = {
  "schedule a demo": "https://calendly.com/krita/meet-kesavan",
  "pricing": "https://krita.ai/pricing/",
  "about": "https://krita.ai/about-us/",
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigateTo = (page) => {
    const url = pageUrls[page];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #FFF, #FFCD00)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img
              style={{ height: "30px", marginLeft: "30px", cursor: 'pointer' }}
              src={logo}
              alt="Krita"
              onClick={() => {
                window.open('https://krita.ai/', '_blank');
              }}
            />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                  <MenuItem key={page} onClick={() => handleNavigateTo(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleNavigateTo(page)}
                  sx={{
                    my: 2,
                    color: "#70A8DC",
                    border: index === 0 ? "1px solid #70A8DC" : "none",
                    borderRadius: "35px",
                    m: 2,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
