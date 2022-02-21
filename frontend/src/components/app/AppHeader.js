import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  rectangleBig: {
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(182.65deg, #78C9CE 0%, #2496A2 99.98%, #2496A2 100%)",
    position: "relative",
  },
  rectangleSmall: {
    height: "7px",
    width: "100%",
    opacity: "0.3",
    transform: "scaleY(-1)",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0,
  },
  logo: {
    height: "20px",
    width: "180px",
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: "60px",
    maxWidth: "100vw",
  },
  icon: {
    marginTop: "19px",
    height: "20px",
    width: "180px",
    color: "#FFFFFF",
  },
});

const AppHeader = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.rectangleBig}>
        <div className={classes.rectangleSmall} />
      </div>
    </div>
  );
};

export default AppHeader;
