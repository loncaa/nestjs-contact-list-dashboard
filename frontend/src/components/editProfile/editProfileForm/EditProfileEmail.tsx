import React from 'react';

import Grid from '@material-ui/core/Grid';

import EmailIcon from '../../icon/email';
import EditProfileFormStyle from './editProfileForm.module.css'

const EditProfileEmail = (props) => {
  return (
    <Grid key={`editemail`} container className={EditProfileFormStyle.root}>
      <Grid key={'editemail1'} className={EditProfileFormStyle.label} container item xs={12} sm={12}>
        <EmailIcon/>
        <span className={EditProfileFormStyle.labelText}>Email</span>
      </Grid>
      <Grid key={'editemail2'} container item xs={12} sm={12}>
        <input className={EditProfileFormStyle.input} type="text" value={props.email} name={props.name} onChange={props.handleOnChange}/>
      </Grid>
    </Grid>
  );
};

export default EditProfileEmail;