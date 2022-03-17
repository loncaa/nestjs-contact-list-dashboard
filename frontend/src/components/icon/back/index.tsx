import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Back from "./back.svg";

const useStyles = makeStyles({
  icon: {
    cursor: "pointer",
    height: "16px",
    width: "16px",
  },
});

const Index = (props: any) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img
        src={Back}
        className={classes.icon}
        alt="BackIcon"
        onClick={props.handleBackToContacts}
      />
    </React.Fragment>
  );
};

export default Index;
