import React from 'react';
import ProfileForm from '../ProfileForm';

import ProfileInformationStyle from './profileInformation.module.css'
import ProfileHeaderDesktop from '../header/ProfileHeaderDesktop';

const ProfileInformation = (props) => {
  return (
    <div className={ProfileInformationStyle.root}>
        <ProfileHeaderDesktop
          handleAddToFavorites={props.handleAddToFavorites}
          handleRemoveFromFavorites={props.handleRemoveFromFavorites}
          handleBackToContacts={props.handleBackToContacts}
          handleEditContact={props.handleEditContact}
          isFavorite={props.isFavorite}
          fullName={props.fullName}
        />
      <div className={ProfileInformationStyle.border}>
        <div className={ProfileInformationStyle.form}>
          <ProfileForm
            email={props.email}
            numbers={props.numbers}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;