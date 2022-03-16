import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Phone from './phone.svg';

const useStyles = makeStyles({
  icon: {
    height: '15px',
    width: '15px',
  },
});

const Index = (props) => {
  const classes = useStyles();

  return (
    <div style={{...props.style}}>
      <img src={Phone} className={classes.icon}  alt="Phone"/>
    </div>
  )
}

export default Index