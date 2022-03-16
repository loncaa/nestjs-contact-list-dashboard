import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import XksSelected from './xks_selected.svg';

const useStyles = makeStyles({
  icon: {
    cursor: 'pointer',
    height: '100%',
    width: '8px'
  },
});

const Index = (props) => {
  const classes = useStyles();

  return (
    <div>
      <img src={XksSelected} className={classes.icon}  alt="XksSelectedIcon" style={props.style} onClick={props.handleRemoveAction}/> :
    </div>
  )
}

export default Index