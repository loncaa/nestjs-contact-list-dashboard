import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Xks from "./upload.svg";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    height: "100%",
  },
  icon: {
    height: "100%",
    width: "21px",
  },
});

const Index = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={Xks}
        className={classes.icon}
        alt="XksIcon"
        style={props.style}
        onClick={props.handleAction}
      />
    </div>
  );
};

export default Index;
