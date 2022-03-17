import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Plus from "./plus.svg";

const useStyles = makeStyles({
  icon: {
    cursor: "pointer",
    height: "100%",
    width: "8px",
  },
});

const Index = (props: any) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img
        src={Plus}
        className={classes.icon}
        alt="PlusIcon"
        style={props.style}
        onClick={props.handleAddAction}
      />
    </React.Fragment>
  );
};

export default Index;
