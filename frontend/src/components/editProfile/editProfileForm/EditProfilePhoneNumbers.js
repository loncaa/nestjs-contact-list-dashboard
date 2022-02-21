import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import EditProfileFromStyle from './editProfileForm.module.css'

import Grid from '@material-ui/core/Grid';
import PhoneIcon from '../../icon/phone';
import XksIcon from '../../icon/xks/xksGray';

const useStyles = makeStyles({
  removeButtonWrapper:{
    display: 'block',
    margin: 'auto',
    textAlign: 'right'
  },
  numbersRoot:{
    marginBottom: '30px'
  },
  button: {
    height: '32px',
    width: '32px',
    backgroundColor: 'white',
    border: '1px solid #BBC4C3',
    opacity: '0.5',
    borderRadius: '50%',
    '&:hover': {
      cursor: 'pointer',
      border: '1px solid #2DA1AD',
    }
  },
});

const EditProfilePhoneNumbers = (props) => {
  const { numbers } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid className={EditProfileFromStyle.label} key={`label1`} container item xs={12} sm={12}>
        <PhoneIcon/>
        <span className={EditProfileFromStyle.labelText}>numbers</span>
      </Grid>
      <Grid key={`label3`} container item xs={12} sm={12}>
        {
          numbers && numbers.map((n,i) => {
            return(
              <Grid key={`label30${i}`} container item xs={12} sm={12} md={12} className={classes.numbersRoot}>
                <Grid container item xs={12} sm={6}>
                  <input className={EditProfileFromStyle.input} type="text" value={n.type} name={'type'} onChange={(e) => props.handleOnNumbersChange(e,i)}/>
                </Grid>
                <Grid container item xs={12} sm={6}  className={EditProfileFromStyle.numberInputLabel}>
                  <Grid container item xs={10} sm={10}>
                    <input className={EditProfileFromStyle.input} type="text" value={n.number} name={'number'} onChange={(e) => props.handleOnNumbersChange(e,i)}/>
                  </Grid>
                  <Grid container item xs={2} sm={2} className={classes.removeButtonWrapper}>
                    <button className={classes.button} onClick={(e) => props.handleOnNumberRemove(i)}>
                      <XksIcon style={{width: '8px'}}/>
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
    </Grid>
  )
}

export default EditProfilePhoneNumbers;