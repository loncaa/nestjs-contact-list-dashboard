import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Xks from "./xks.svg";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    height: "100%",
  },
  icon: {
    height: "100%",
    width: "14px",
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
        onClick={props.handleRemoveAction}
      />
    </div>
  );
};

export default Index;
