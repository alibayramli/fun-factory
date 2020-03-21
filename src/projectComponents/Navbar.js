import React from "react";
import "./Navbar.css";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core/";
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h4" color="inherit">
          Fun Factory
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
