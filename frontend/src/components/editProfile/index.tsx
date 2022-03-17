import React from "react";
import { useHistory } from "react-router-dom";

import EditProfileAvatar from "./editProfileAvatar";
import EditProfileInformation from "./editProfileInformation";
import { ROUTES } from "../../constants";

import EditProfileStyle from "./editProfile.module.css";
import EditProfileHeaderMobile from "./header/EditProfileHeaderMobile";

import { EditProfileProps } from "./types";

const Index = (props: EditProfileProps) => {
  const { id, name, profilePicture } = props.dirty || {
    name: "None",
    profilePicture: "None",
  };

  const history = useHistory();

  const backToContacts = () => {
    history.goBack();
  };

  const removeContact = () => {
    props.handleRemoveContact(id);
    history.push(ROUTES.home);
  };

  return (
    <React.Fragment>
      <EditProfileHeaderMobile
        handleRemoveContact={removeContact}
        handleBackToContacts={backToContacts}
      />
      <div className={EditProfileStyle.root}>
        <EditProfileAvatar
          width={186}
          height={186}
          name={name}
          src={profilePicture}
        />
        <EditProfileInformation
          contact={props.dirty}
          handleRemoveContact={removeContact}
          handleBackToContacts={backToContacts}
          handleOnContactDataSave={props.handleOnContactDataSave}
          handleOnChange={props.handleOnChange}
          handleOnNumbersChange={props.handleOnNumbersChange}
          handleOnNumberRemove={props.handleOnNumberRemove}
          handleOnNewNumberAdded={props.handleOnNewNumberAdded}
        />
      </div>
    </React.Fragment>
  );
};

export default Index;
