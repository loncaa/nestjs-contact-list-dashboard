import React from 'react';
import {useHistory} from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import AppStyle from '../app/app.module.css'

import EditIcon from '../icon/edit';
import DeleteIcon from '../icon/delete';
import FavoriteIcon from '../icon/favorite';
import Avatar from '../profile/avatar';

import {ROUTES} from '../../constants';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    height: '60px',
    border: '1px solid rgba(187,196,195,0.4)',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    margin: '15px'
  },
  avatar: {
    margin: 'auto 13px',
    width: '43px',
    height: '43px',
    border: '3px solid rgba(187,196,195,0.3)',
  },
  actions: {
    display: 'flex',
    width: '100%',
    textAlign: 'right',
    margin: 'auto'
  },
  label: {
    width: '150px',
    textAlign: 'left',
    margin: 'auto 12px',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: '17px'
  }
});

const ContactMobile = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const {fullName, profilePicture, isFavorite} = props.item;

  const editContact = () => {
    props.handleSelectContact();
    history.push(ROUTES.edit)
  };

  const goToProfile = () => {
    props.handleSelectContact();
    history.push(ROUTES.profile);
  };

  return (
    <div className={AppStyle.mobileView} style={{width: '100%'}}>
      <div className={classes.box}>
        <Avatar margin='auto 13px'
                width={43}
                height={43}
                alt={fullName}
                src={profilePicture}
                onClick={goToProfile}/>
        <span className={classes.label}>{fullName}</span>
        <div className={classes.actions}>
          <FavoriteIcon
            isFavorite={isFavorite}
            handleRemoveFromFavorites={props.handleRemoveFromFavorites}
            handleAddToFavorites={props.handleAddToFavorites}
            style={{margin: 'auto'}}/>

          <EditIcon
            handleEditContact={editContact} style={{margin: 'auto'}}/>
          <DeleteIcon
            handleRemoveContact={props.handleRemoveContact} style={{margin: 'auto 16px auto auto'}}/>
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;