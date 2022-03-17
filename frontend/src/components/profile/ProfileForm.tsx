import React from "react";

import ProfilePhoneNumbers from "./profilePhoneNumbers/ProfilePhoneNumbers";
import ProfileEmail from "./profileEmail/ProfileEmail";

const ProfileForm = (prop: anys) => {
  return (
    <React.Fragment>
      <ProfileEmail email={props.email} />
      <ProfilePhoneNumbers numbers={props.numbers} />
    </React.Fragment>
  );
};

export default ProfileForm;
