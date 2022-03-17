import React from "react";
import ProfileAvatarDesktop from "./ProfileAvatarDesktop";
import ProfileAvatarMobile from "./ProfileAvatarMobile";

const ProfileAvatar = (props: any) => {
  const { name, profilePicture } = props;

  return (
    <React.Fragment>
      <ProfileAvatarDesktop name={name} profilePicture={profilePicture} />
      <ProfileAvatarMobile name={name} profilePicture={profilePicture} />
    </React.Fragment>
  );
};

export default ProfileAvatar;
