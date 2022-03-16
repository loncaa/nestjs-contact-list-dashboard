import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ProfileHeader from './ProfileHeader';

import AppStyle from '../../app/app.module.css';

const useStyles = makeStyles({
  root: {
    height: '50px',
    padding: '0 30px',
    borderBottom: '1px solid #BBC4C3',
    display: 'flex',
  }
});

const ProfileHeaderMobile = (props) => {
  const classes = useStyles();

  return (
    <div className={AppStyle.mobileView}>
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

export default ProfileHeaderMobile;