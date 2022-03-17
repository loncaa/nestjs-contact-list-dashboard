import React from "react";
import EditProfileForm from "../editProfileForm";
import { makeStyles } from "@material-ui/core/styles";

import ProfileStyle from "../../profile/profile.module.css";
import EditProfileInformationStyle from "./editProfileInformation.module.css";
import EditProfileHeaderDesktop from "../header/EditProfileHeaderDesktop";

import { EditProfileInformationProps } from "../types";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginLeft: "25px",
    marginRight: "25px",
  },
  border: {
    borderTop: "2px solid #2DA1AD",
  },
});

const EditProfileInformation = (props: EditProfileInformationProps) => {
  const classes = useStyles();

  return (
    <div className={EditProfileInformationStyle.root}>
      <EditProfileHeaderDesktop
        handleRemoveContact={props.handleRemoveContact}
        handleBackToContacts={props.handleBackToContacts}
      />
      <div className={classes.border}>
        <EditProfileForm
          contact={props.contact}
          handleOnContactDataSave={props.handleOnContactDataSave}
          handleOnChange={props.handleOnChange}
          handleOnNumbersChange={props.handleOnNumbersChange}
          handleOnNumberRemove={props.handleOnNumberRemove}
          handleOnNewNumberAdded={props.handleOnNewNumberAdded}
        />
      </div>
    </div>
  );
};

export default EditProfileInformation;
