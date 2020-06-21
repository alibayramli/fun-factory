import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core/";
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    backgroundColor: "purple"
  }
}));
export default function Navbar() {

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h4" color="inherit">
          Fun Factory
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
