import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import ProfileHeader from './ProfileHeader';
import AppStyle from '../../app/app.module.css';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    display: 'flex',
    height: '80px',
  }
});

const ProfileHeaderDesktop = (props) => {
  const classes = useStyles();

  return (
    <div className={AppStyle.desktopView}>
      <ProfileHeader
        classes={classes}
        handleAddToFavorites={props.handleAddToFavorites}
        handleRemoveFromFavorites={props.handleRemoveFromFavorites}
        handleBackToContacts={props.handleBackToContacts}
        handleEditContact={props.handleEditContact}
        isFavorite={props.isFavorite}
      />
    </div>);
};

export default ProfileHeaderDesktop;