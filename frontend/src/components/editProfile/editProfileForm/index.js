import React from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import EditProfileEmail from './EditProfileEmail';
import EditProfileFullName from './EditProfileFullName';
import EditProfilePhoneNumbers from './EditProfilePhoneNumbers';
import EditProfileFormFooter from './EditProfileFormFooter';
import Grid from '@material-ui/core/Grid';
import PlusIcon from '../../icon/plus';

const useStyles = makeStyles({
  label: {
    margin: 'auto 0',
    color: '#2DA1AD',
    fontSize: '14px',
    letterSpacing: 0,
    lineHeight: '17px',
  },
  saveWrapper: {
    display: 'block',
    textAlign: 'right',
  },
  button: {
    cursor: 'pointer',
    color: '#FFF',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #2DA1AD',
    marginRight: '15px',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '76px',
  },
});

const EditProfileForm = (props) => {
  const {fullName, email, numbers} = props.contact;

  const classes = useStyles();
  const history = useHistory();

  const handleOnClose = () => {
    history.goBack();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleOnContactDataSave();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <EditProfileFullName
        name='fullName'
        handleOnChange={props.handleOnChange}
        fullName={fullName}/>

      <EditProfileEmail
        name='email'
        handleOnChange={props.handleOnChange}
        email={email}/>


      <EditProfilePhoneNumbers
        numbers={numbers}
        handleOnNumbersChange={props.handleOnNumbersChange}
        handleOnNumberRemove={props.handleOnNumberRemove}
      />

      <Grid container item xs={12} sm={12}>
        <div className={classes.button} onClick={props.hadnleOnNewNumberAdded}>
          <PlusIcon/>
        </div>
        <span className={classes.label}>Add number</span>
      </Grid>

      <EditProfileFormFooter
        handleOnClose={handleOnClose}
      />

    </form>
  );
};

export default EditProfileForm;