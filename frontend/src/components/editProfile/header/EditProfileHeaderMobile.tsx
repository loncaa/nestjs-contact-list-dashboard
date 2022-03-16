import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import EditProfileHeader from './EditProfileHeader';

import AppStyle from '../../app/app.module.css';

const useStyles = makeStyles({
  root: {
    height: '50px',
    padding: '0 30px',
    borderBottom: '1px solid #BBC4C3',
    display: 'flex',
  }
});

const EditProfileHeaderMobile = (props) => {
  const classes = useStyles();

  return (
    <div className={AppStyle.mobileView}>
        <EditProfileHeader
        classes={classes}
        handleBackToContacts={props.handleBackToContacts}
        handleRemoveContact={props.handleRemoveContact}
      />
    </div>);
};

export default EditProfileHeaderMobile;