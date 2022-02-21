import React from 'react';
import FavoriteIcon from '../../icon/favorite';
import BackIcon from '../../icon/back';
import EditIcon from '../../icon/edit';

import ProfileHeaderStyle from './header.module.css'

const ProfileHeader = (props) => {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <div className={ProfileHeaderStyle.left}>
        <BackIcon handleBackToContacts={props.handleBackToContacts}/>
        <span className={ProfileHeaderStyle.title}>{props.fullName}</span>
      </div>

      <div className={ProfileHeaderStyle.right}>
        <FavoriteIcon
          isFavorite={props.isFavorite}
          handleRemoveFromFavorites={props.handleRemoveFromFavorites}
          handleAddToFavorites={props.handleAddToFavorites}/>
          <EditIcon
            handleEditContact={props.handleEditContact}
            style={{marginLeft:'33px'}}
          />
      </div>
    </div>);
};

export default ProfileHeader;