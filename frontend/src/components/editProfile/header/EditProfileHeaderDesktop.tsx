import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditProfileHeader from "./EditProfileHeader";

import AppStyle from "../../app/app.module.css";

import { EditProfileHeaderProps } from "../types";

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    display: "flex",
    height: "80px",
  },
});

const EditProfileHeaderDesktop = (props: EditProfileHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={AppStyle.desktopView}>
      <EditProfileHeader
        classes={classes}
        handleBackToContacts={props.handleBackToContacts}
        handleRemoveContact={props.handleRemoveContact}
      />
    </div>
  );
};

export default EditProfileHeaderDesktop;
