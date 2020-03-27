import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        {" © "}
        {new Date().getFullYear() + " "}
        <Link color="inherit" href="#">
          Ali Bayramli
        </Link>{" "}
      </Typography>
    </footer>
  );
}
