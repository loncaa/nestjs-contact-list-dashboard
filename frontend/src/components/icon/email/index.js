import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Email from './email.svg';

const useStyles = makeStyles({
  icon: {
    height: '10px',
    width: '15px',
  },
});

const Index = (props) => {
  const classes = useStyles();

  return (
    <div style={{...props.style}}>
      <img src={Email} className={classes.icon}  alt="Email"/>
    </div>
  )
}

export default Index