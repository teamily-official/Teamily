import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 180;
const navItems = ["Home", "About", "Services", "Contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#1976d2" }}>
        TEAMILY
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#0080d3",
                "&:hover": {
                  color: "#1976d2",
                },
                "&.Mui-selected": {
                  color: "#1976d2",
                },
              }}
              selected={false} // agar true kare to selected color dikhega
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Mobile Drawer Get Button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#000080",
          },
        }}
      >
        Get
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#FFF" }} elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Mobile Menu Button */}
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Title */}
          <Box sx={{ display: { xs: "none", sm: "block" }, mr: ["15rem"] }}>
            <img
              src="/src/assets/image/Teamlogo.png"
              alt="Logo"
              style={{
                height: "95px",
                width: "180px",
                cursor: "pointer",
                mixBlendMode: "multiply",
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "3rem" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  color: "#0080d3",
                  "&:hover": {
                    color: "#000080",
                    textDecoration: "underline",
                  },
                  "&.Mui-selected": {
                    color: "#000080",
                    textDecoration: "underline",
                  },
                }}
                selected={false}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Desktop Get Button */}
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: "#0081CD",
              "&:hover": {
                backgroundColor: "#000080",
              },
            }}
          >
            Get Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Page Content */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
