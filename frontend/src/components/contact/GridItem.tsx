import AddIcon from "@material-ui/icons/Add";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ROUTES } from "../../constants";

import { ContactGridItemProps } from "./types";

const useStyles = makeStyles({
  box: {
    color: "#2DA1AD",
    boxSizing: "border-box",
    height: "150px",
    width: "100%",
    border: "1px dashed #2DA1AD",
    opacity: "0.5",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    margin: "15px",
  },
  button: {
    cursor: "pointer",
    position: "relative",
    top: "calc(50% - 24px)",
    left: "calc(50% - 31px)",
    height: "48px",
    width: "62px",
    opacity: "0.5",
  },
  icon: {
    height: "18px",
    width: "18px",
  },
  label: {
    fontSize: "16px",
    letterSpacing: "0",
    lineHeight: "19px",
  },
});

const GridItem = (props: ContactGridItemProps) => {
  const classes = useStyles();
  const history = useHistory();

  const addNewContact = () => {
    props.handleAddNewContact();
    history.push(ROUTES.createProfile);
  };

  return (
    <div className={classes.box} onClick={addNewContact}>
      <div className={classes.button}>
        <AddIcon className={classes.icon} />
        <div className={classes.label}>Add new</div>
      </div>
    </div>
  );
};

export default GridItem;
