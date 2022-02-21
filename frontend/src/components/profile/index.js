import React from 'react';
import {useHistory} from 'react-router-dom';

import ProfileInformation from './profileInformation/ProfileInformation';
import {ROUTES} from '../../constants';
import ProfileHeaderMobile from './header/ProfileHeaderMobile';

import ProfileStyle from './profile.module.css';
import Index from './profileAvatar';


const Profile = (props) => {
  const history = useHistory();
  const {id, fullName, profilePicture, email, numbers, isFavorite} = props.contact;

  const backToContacts = () => {
    history.goBack();
  };

  const editContact = () => {
    history.push(ROUTES.edit);
  };

  const addToFavorites = () => {
    props.handleAddToFavorites(id);
  };

  const removeFromFavorites = () => {
    props.handleRemoveFromFavorites(id);
  };

  return (
    <React.Fragment>
      <ProfileHeaderMobile
        handleAddToFavorites={addToFavorites}
        handleRemoveFromFavorites={removeFromFavorites}
        handleBackToContacts={backToContacts}
        handleEditContact={editContact}
        isFavorite={isFavorite}
      />
      <div className={ProfileStyle.root}>
        <Index
          fullName={fullName}
          profilePicture={profilePicture}/>
        <ProfileInformation
          handleAddToFavorites={addToFavorites}
          handleRemoveFromFavorites={removeFromFavorites}
          handleBackToContacts={backToContacts}
          handleEditContact={editContact}
          fullName={fullName}
          email={email}
          numbers={numbers}
          isFavorite={isFavorite}
        />
      </div>
    </React.Fragment>
  );
};

export default Profile;