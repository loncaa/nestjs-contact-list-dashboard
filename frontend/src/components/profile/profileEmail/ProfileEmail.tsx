import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "../../icon/email";

import ProfileEmailStyle from "./profileEmail.module.css";

const useStyles = makeStyles({
  label: {
    marginLeft: "15px",
    color: "#2DA1AD",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "19px",
  },
});

const ProfileEmail = (props: any) => {
  const classes = useStyles();

  return (
    <Grid container className={ProfileEmailStyle.root}>
      <Grid key={`label1`} container item xs={12} sm={3}>
        <EmailIcon />
        <span className={classes.label}>email</span>
      </Grid>
      <Grid key={`label2`} container item xs={12} sm={9}>
        <span className={ProfileEmailStyle.text}>{props.email}</span>
      </Grid>
    </Grid>
  );
};

export default ProfileEmail;
