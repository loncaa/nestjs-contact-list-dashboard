import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppStyle from "../app/app.module.css";

import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";

import { ContactProps } from "./types";

const useStyles = makeStyles({
  box: {
    position: "relative",
    boxSizing: "border-box",
    height: "150px",
    width: "100%",
    border: "1px solid rgba(187,196,195,0.4)",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    margin: "15px",
    "&:hover": {
      border: "1px solid #2DA1AD",
    },
  },
});

const ContactDesktop = (props: ContactProps) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const classes = useStyles();

  const { name, profilePicture, isFavorite } = props.item;

  return (
    <div className={AppStyle.desktopView}>
      <div
        className={classes.box}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <ContactHeader
          isMouseEnter={mouseEnter}
          isFavorite={isFavorite}
          handleRemoveContact={props.handleRemoveContact}
          handleAddToFavorites={props.handleAddToFavorites}
          handleRemoveFromFavorites={props.handleRemoveFromFavorites}
          handleSelectContact={props.handleSelectContact}
        />
        <ContactBody
          name={name}
          profilePicture={profilePicture}
          handleSelectContact={props.handleSelectContact}
        />
      </div>
    </div>
  );
};

export default ContactDesktop;
