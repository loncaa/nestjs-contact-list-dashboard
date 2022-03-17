import FavoriteIcon from "../icon/favorite";
import DeleteIcon from "../icon/delete";
import EditIcon from "../icon/edit";

import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ROUTES } from "../../constants";

import { ContactHeaderProps } from "./types";

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

const ContactHeader = (props: ContactHeaderProps) => {
  const classes = useStyles();
  const history = useNavigate();

  const editContact = () => {
    props.handleSelectContact();
    history(ROUTES.edit);
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
