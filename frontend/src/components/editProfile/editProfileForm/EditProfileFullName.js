import React from 'react';

import Grid from '@material-ui/core/Grid';

import EditProfileFromStyle from './editProfileForm.module.css'
import ProfileIcon from '../../icon/profile';

const EditProfileFullName = (props) => {
  return (
    <Grid key={'editfullname'} container className={EditProfileFromStyle.root}>
      <Grid key={`editfullname1`} className={EditProfileFromStyle.label} container item xs={12} sm={12}>
        <ProfileIcon/>
        <span className={EditProfileFromStyle.labelText}>Full name</span>
      </Grid>
      <Grid key={`editfullname2`} container item xs={12} sm={12}>
        <input className={EditProfileFromStyle.input} type="text" value={props.fullName} name={props.name} onChange={props.handleOnChange}/>
      </Grid>
    </Grid>
  );
};

export default EditProfileFullName;