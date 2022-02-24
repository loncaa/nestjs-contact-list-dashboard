import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppStyle from '../../app/app.module.css';
import Avatar from '../avatar';

const useStyles = makeStyles({
  avatar: {
    margin: 'auto',
    width: '53px',
    height: '53px',
    border: '3px solid rgba(187,196,195,0.3)'
  },
  root: {
    display: 'flex',
    height: '98px',
    margin: 'auto 22px',
    borderBottom: '2px solid #2DA1AD'
  },
  label: {
    width: '80%',
    textAlign: 'left',
    margin: 'auto auto auto 23px',
  }
});

const ProfileAvatarMobile = (props) => {
  const classes = useStyles();

  return (
    <div className={AppStyle.mobileView}>
      <div className={classes.root}>
        <Avatar height={53}
          width={53}
          margin={'auto'}
          alt={props.name}
          src={props.profilePicture} />
        <span className={classes.label}>{props.name}</span>
      </div>
    </div>
  )
}

export default ProfileAvatarMobile;