import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Profile from "./profile.svg";

const useStyles = makeStyles({
  icon: {
    height: "16px",
    width: "16px",
  },
});

const Index = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img src={Profile} className={classes.icon} alt="ProfileIcon" />
    </React.Fragment>
  );
};

export default Index;
