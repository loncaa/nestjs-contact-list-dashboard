import React from 'react';
import ProfileAvatarDesktop from './ProfileAvatarDesktop';
import ProfileAvatarMobile from './ProfileAvatarMobile';

const ProfileAvatar = (props) => {
  const { fullName, profilePicture } = props;

  return (
      <React.Fragment>
        <ProfileAvatarDesktop
          fullName={fullName}
          profilePicture={profilePicture}
        />
        <ProfileAvatarMobile
          fullName={fullName}
          profilePicture={profilePicture}
        />
      </React.Fragment>
  )
}

export default ProfileAvatar;