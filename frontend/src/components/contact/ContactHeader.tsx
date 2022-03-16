import React from "react";

import FavoriteIcon from "../icon/favorite";
import DeleteIcon from "../icon/delete";
import EditIcon from "../icon/edit";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ROUTES } from "../../constants";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "15px 17px 0 17px",
  },
  left: {
    flex: 1,
    textAlign: "left",
  },
  right: {
    flex: 1,
    textAlign: "right",
  },
});

const ContactHeader = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const editContact = () => {
    props.handleSelectContact();
    history.push(ROUTES.edit);
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <FavoriteIcon
          isFavorite={props.isFavorite}
          handleRemoveFromFavorites={props.handleRemoveFromFavorites}
          handleAddToFavorites={props.handleAddToFavorites}
        />
      </div>
      {props.isMouseEnter ? (
        <div className={classes.right}>
          <EditIcon handleEditContact={editContact} />
          <DeleteIcon
            handleRemoveContact={props.handleRemoveContact}
            style={{ marginLeft: "26px" }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ContactHeader;
