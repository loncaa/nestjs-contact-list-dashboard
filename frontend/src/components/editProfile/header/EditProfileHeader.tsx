import React from "react";

import BackIcon from "../../icon/back";
import DeleteIcon from "../../icon/delete";

import HeaderStyle from "./header.module.css";
import { EditProfileHeaderProps } from "../types";

const EditProfileHeader = (props: EditProfileHeaderProps) => {
  const classes = props.classes;

  //TODO napraviti header wrapper
  return (
    <div className={classes.root}>
      <div className={HeaderStyle.left}>
        <BackIcon handleBackToContacts={props.handleBackToContacts} />
      </div>
      <div className={HeaderStyle.right}>
        <span className={HeaderStyle.delete}>Delete</span>
        <DeleteIcon
          handleRemoveContact={props.handleRemoveContact}
          style={{ marginLeft: "15px" }}
        />
      </div>
    </div>
  );
};

export default EditProfileHeader;
