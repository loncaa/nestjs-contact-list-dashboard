import React from "react";
import Avatar from "../avatar";

import AppStyle from "../../app/app.module.css";

const ProfileAvatarDesktop = (props: any) => {
  return (
    <div className={AppStyle.desktopView} style={{ width: "auto" }}>
      <Avatar
        height={186}
        width={186}
        alt={props.name}
        src={props.profilePicture}
      />
    </div>
  );
};

export default ProfileAvatarDesktop;
