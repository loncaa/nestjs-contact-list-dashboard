import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: "76px",
  },
  right: {
    margin: "0 0 5px auto",
  },
  button: {
    cursor: "pointer",
    border: "none",
    color: "#FFF",
    height: "42px",
    width: "160px",
    borderRadius: "28px",
    backgroundColor: "#2DA1AD",
    textAlign: "center",
  },
});

const EditProfileFormFooter = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <input
          className={classes.button}
          style={{ backgroundColor: "#BBC4C3" }}
          onClick={props.handleOnClose}
          value={"Close"}
        />
      </div>
      <div className={classes.right}>
        <input className={classes.button} type="submit" value="Save" />
      </div>
    </div>
  );
};

export default EditProfileFormFooter;
