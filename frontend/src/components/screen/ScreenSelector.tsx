import { makeStyles } from "@material-ui/core/styles";

import ScreenStyle from "./screen.module.css";

import { SCREENS } from "../../constants";

const useStyles = makeStyles({
  container: {
    display: "inline-flex",
  },
  separator: {
    height: "15px",
    width: "3px",
    margin: "4px 0",
    borderLeft: "1px solid",
    opacity: 0.3,
  },
  divider: {
    boxSizing: "border-box",
    height: "2px",
    width: "1260px",
    border: "1px solid #2DA1AD",
  },
});

const ScreenSelector = (props: any) => {
  const classes = useStyles();

  return (
    <div className={ScreenStyle.selectorRoot}>
      <div className={classes.container}>
        <span
          className={ScreenStyle.selector}
          style={
            props.selectedScreen === SCREENS.contacts
              ? { color: "#2DA1AD" }
              : null
          }
          onClick={props.handleSelectContacts}
        >
          All contacts
        </span>
        <div className={classes.separator} />
        <span
          className={ScreenStyle.selector}
          style={
            props.selectedScreen === SCREENS.favorites
              ? { color: "#2DA1AD" }
              : null
          }
          onClick={props.handleSelectFavorites}
        >
          My favorites
        </span>
      </div>
    </div>
  );
};

export default ScreenSelector;
